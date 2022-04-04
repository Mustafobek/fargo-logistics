import { errorLog } from "../utils/logger.js";
import { errorRes, notFound, successRes } from "../utils/response.js";
import { Order, ORDER_STATUS } from "../models/Order.js";
import {Route} from "../models/Route.js";

export const getOrders = async (req, res) => {
  try {
    const filter = {};

    if (req.query.status) {
      filter.status = req.query.status;
    }

    const orders = await Order.find(filter).populate(['carId', 'routeId', 'driverId']).exec();

    return successRes(res, 200, { orders });
  } catch (err) {
    console.log(errorLog(err.message));
  }
};

export const getOrder = async (req, res) => {
  try {
    const order = await Order.findOne({ _id: req.params.id }).populate(['carId', 'routeId', 'driverId']).exec();

    if (!order) {
      return notFound(res);
    }

    return successRes(res, 200, { order });
  } catch (err) {
    console.log(errorLog(err.message));
  }
};

export const createOrder = async (req, res) => {
  try {
    const route = await Route.findOne({_id: req.body.routeId})
    const order = new Order({...req.body, driverId: req.user._id});

    order.updates.push({
      status: ORDER_STATUS.inProcess,
      time: Date.now(),
      currentCity: route.cities[0].city,
      nextCity: route.cities[1].city,
      willFinish: route.periods[0].period
    });
    await order.save();

    return successRes(res, 201, { order });
  } catch (err) {
    console.log(errorLog(err.message));
  }
};

export const changeOrderStatus = async (req, res) => {
  try {
    let order = await Order.findOne({_id: req.params.id}).populate([
        'routeId'
    ]).exec()
    const routeCities = order.routeId.cities
    const routePeriods = order.routeId.periods

    if(req.body.city === 'FINISH') {
      order = await Order.findOneAndUpdate(
          {_id: req.params.id},
          {status: ORDER_STATUS.completed},
          {new: true}
      )
    } else {
      const updateObj = {
        currentCity: routeCities[order.updates.length].city,
        nextCity: routeCities[order.updates.length + 1] ? routeCities[order.updates.length + 1].city : 'FINISH',
        willFinish: routePeriods[order.updates.length] ? routePeriods[order.updates.length].period : 0
      }

      order.updates.push(updateObj)
      await order.save()
    }

    return successRes(res, 200, { order });
  } catch (err) {
    console.log(errorLog(err.message));
  }
};




/*
* const orderUpdates = await Order.findOne({ _id: req.params.id }).populate(['carId', 'routeId', 'driverId']).exec()
    let order = ''
    let updateObj = {}
    // if pre finish
    if (req.body.preCompleted) {
      order = await Order.findOneAndUpdate(
        { _id: req.params.id },
        { status: ORDER_STATUS.preCompleted, city: req.body.city },
        { new: true }
      );
    }

    // if finish
    if(req.body.completed) {
      order = await Order.findOneAndUpdate(
        { _id: req.params.id },
        { status: ORDER_STATUS.completed, city: req.body.city },
        { new: true }
      );
    }

    order = await Order.findOneAndUpdate(
        { _id: req.params.id },
        { status: req.body.status, city: req.body.city },
        { new: true }
    );

    const index = orderUpdates.routeId.cities.findIndex(c => c.city === req.body.city)

    console.log(orderUpdates.routeId.cities, index)

    if(orderUpdates.routeId.cities[index].city) {
      updateObj = {
        status: req.body.status,
        time: Date.now(),
        nextCity: orderUpdates.routeId.cities[index + 1].city,
        currentCity: orderUpdates.routeId.cities[index].city,
        willFinish: orderUpdates.routeId.periods[index].period,
      };

      if (orderUpdates.routeId.cities.length - 1 === index) {
        order = await Order.findOneAndUpdate(
            { _id: req.params.id },
            { status: ORDER_STATUS.preCompleted, city: req.body.city },
            { new: true }
        );

        updateObj.status = ORDER_STATUS.preCompleted
      }


      order.updates.push(updateObj)
      await order.save()
    }
* */