import React, {useEffect, useState} from 'react';
import Navbar from "./components/Navbar";
import OrderCard from "./components/OrderCard";
import axios from "axios";
import {HOST, ORDERS} from "../constants";
import {GetOrders} from "../functions";

export const Main = () => {
    const [orders, setOrders] = useState([])

    useEffect(async () => {
        if (orders.length === 0) {
            setOrders(await GetOrders())
        }
    }, [])

    return (
        <>
            <Navbar />

            <div className="container mt-5 pt-5">
                <table className="table table-bordered table-hover table-striped">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Описание</th>
                        <th scope="col">Машина</th>
                        <th scope="col">Статус</th>
                        <th scope="col">Маршрут</th>
                        <th scope="col">Водитель</th>
                        <th scope="col">Перейти</th>
                    </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => <OrderCard idx={index} key={index} order={order} />)}
                    </tbody>
                </table>

            </div>
        </>
    );
};

export default Main;