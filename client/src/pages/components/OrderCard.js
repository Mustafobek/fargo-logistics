import React, {useEffect, useState} from 'react';
import {GetCar, GetRoute, GetUser} from "../../functions";
import {Link} from "react-router-dom";
import {I18n} from "../../i18n";

function MainCard({idx, order}) {
    const [car, setCar] = useState({})
    const [driver, setDriver] = useState({})
    const [route, setRoute] = useState({})

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

    return (
        <tr>
            <th>{idx + 1}</th>
            <td>{order.title}</td>
            <td>{car.number}</td>
            <td>{order.status === 'IN_PROCESS' ? I18n["IN_PROCESS"] : I18n["COMPLETED"]}</td>
            <td>{route.shortname}</td>
            <td>{driver.fullName}</td>
            <td>
                <Link className={'btn btn-success'} to={'/order/' + order._id}>Go</Link>
            </td>
        </tr>
    );
}

export default MainCard;