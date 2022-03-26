import React, {useEffect, useState} from 'react';
import {GetCar, GetRoute, GetUser} from "../../functions";
import {Link} from "react-router-dom";

function MainCard({idx, order}) {
    const [car, setCar] = useState({})
    const [driver, setDriver] = useState({})
    const [route, setRoute] = useState({})

    console.log('order', order)

    useEffect(async () => {
        if(!car.number) {
            setCar(await GetCar(order.carId))
        }

        if(!route.shortname) {
            setRoute(await GetRoute(order.routeId))
        }

        if(!driver.fullName) {
            setDriver(await GetUser(order.driverId))
        }
    }, [])
    console.log({car, route, driver})

    return (
        <tr>
            <th>{idx}</th>
            <td>{order.title}</td>
            <td>{car.number}</td>
            <td>{order.status}</td>
            <td>{route.shortname}</td>
            <td>{driver.fullName}</td>
            <td>
                <Link className={'btn btn-success'} to={'/' + order._id}>zxc</Link>
            </td>
        </tr>
    );
}

export default MainCard;