import { errorLog } from "../utils/logger.js";
import { errorRes, notFound, successRes } from "../utils/response.js";
import { Order } from "../models/Order.js";

export const getOrders = async (req, res) => {
  try {
    const filter = {};

    if (req.query.status) {
      filter.status = req.query.status;
    }

    const orders = await Order.find(filter);

    return successRes(res, 200, { orders });
  } catch (err) {
    console.log(errorLog(err.message));
  }
};

export const getOrder = async (req, res) => {
  try {
    const order = await Order.findOne({ _id: req.params.id });

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
    const order = new Order(req.body);
    order.updates.push({
      status: "started",
      time: Date.now(),
    });
    await order.save();

    return successRes(res, 201, { order });
  } catch (err) {
    console.log(errorLog(err.message));
  }
};

export const changeOrderStatus = async (req, res) => {
  try {
    const order = await Order.findOneAndUpdate(
      { _id: req.params.id },
      { status: req.body.status },
      { new: true }
    );
    order.updates.push({
      status: req.body.status,
      time: Date.now(),
    });

    return successRes(res, 200, { order });
  } catch (err) {
    console.log(errorLog(err.message));
  }
};
