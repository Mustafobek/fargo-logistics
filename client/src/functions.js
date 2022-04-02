import {AUTH, CARS, HOST, ORDERS, ROUTES} from "./constants";
import axios from "axios";

const CONFIG = {
    headers: {
        'Authorization': localStorage.getItem('token')
    }
}

export const GetOrders = async (query = '') => {
    try {
        const {data} = await axios.get(HOST + ORDERS + '?' + query, CONFIG)

        return data.data.orders
    } catch (err) {
        console.log('err')
    }
}


export const GetOrder = async (id) => {
    try {
        const {data} = await axios.get(HOST + ORDERS + '/' + id, CONFIG)

        return data.data.order
    } catch (e) {
        console.log('err')
    }
}

export const GetCar = async (id) => {
    try {
        const {data} = await axios.get(HOST + CARS + '/' + id, CONFIG)

        return data.data.car
    } catch (e) {
        console.log('err')
    }
}

export const GetCars = async () => {
    try {
        const {data} = await axios.get(HOST + CARS, CONFIG)

        return data.data.cars
    } catch (e) {
        console.log('err')
    }
}

export const GetRoute = async (id) => {
    try {
        const {data} = await axios.get(HOST + ROUTES + '/' + id, CONFIG)

        return data.data.route
    } catch (e) {
        console.log('err')
    }
}


export const GetRoutes = async (id) => {
    try {
        const {data} = await axios.get(HOST + ROUTES, CONFIG)

        return data.data.routes
    } catch (e) {
        console.log('err')
    }
}

export const GetUser = async (id) => {
    try {
        const {data} = await axios.get(HOST + AUTH + '/' + id, CONFIG)

        return data.data.user
    } catch (e) {
        console.log('err')
    }
}

export const GetUsers = async (query = '') => {
    try {
        const {data} = await axios.get(HOST + AUTH + '?' + query, CONFIG)

        return data.data.users
    } catch (e) {
        console.log('err')
    }
}