import React, {useEffect, useState} from 'react';
import Navbar from "./Navbar";
import {GetCar, GetOrder, GetOrders, GetRoute, GetUser} from "../../functions";

const Order = () => {
    const id = window.location.href.split('/order/')[1]

    const [order, setOrder] = useState({})
    const [car, setCar] = useState({})
    const [driver, setDriver] = useState({})
    const [route, setRoute] = useState({})

    useEffect(async () => {
        if(!order.title) {
            setOrder(await GetOrder(id))
        }

        if(!car.number) {
            setCar(await GetCar(order.carId))
        }

        if(!route.shortname) {
            setRoute(await GetRoute(order.routeId))
        }

        if(!driver.fullName) {
            setDriver(await GetUser(order.driverId))
        }
    }, [order, car, route, driver])

    return (
        <>
            <Navbar />

            <div className="container m-5">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title text-center mb-3">{order.title}</h5>

                        <table className="table table-bordered table-hover table-striped">
                            <thead>
                            <tr>
                                <th scope="col">Машина</th>
                                <th scope="col">Статус</th>
                                <th scope="col">Маршрут</th>
                                <th scope="col">Водитель</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{car.number}</td>
                                <td>{order.status}</td>
                                <td>{route.shortname}</td>
                                <td>{driver.fullName}</td>
                            </tr>
                            </tbody>
                        </table>

                        {/* time-tracker */}
                        {/* status updates */}

                        <hr className={'m-4'} />
                        <div className="text-end">
                            <button className={'btn btn-success me-2'}>Update status</button>
                            <button className={'btn btn-danger'}>Finish</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Order;