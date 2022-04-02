import React, {useEffect, useState} from 'react';
import Navbar from "./components/Navbar";
import OrderCard from "./components/OrderCard";
import axios from "axios";
import {HOST, ORDERS} from "../constants";
import {GetOrders} from "../functions";
import FullTableHead from "./components/FullTableHead";

export const Main = () => {
    const [orders, setOrders] = useState([])

    useEffect(async () => {
        if (orders.length === 0) {
            setOrders(await GetOrders('status=IN_PROCESS'))
        }
    }, [])

    return (
        <>
            <Navbar />

            <div className="container mt-5 pt-5">
                <table className="table table-bordered table-hover table-striped">
                    <FullTableHead />
                    <tbody>
                        {orders.map((order, index) => <OrderCard idx={index} key={index} order={order} />)}
                    </tbody>
                </table>

            </div>
        </>
    );
};

export default Main;