import React, { useEffect, useState } from "react";
import "./css/Create.css";
import Navbar from "./components/Navbar";
import {
  GetCar,
  GetCars,
  GetOrder,
  GetOrders,
  GetRoute,
  GetRoutes,
  GetUser,
  GetUsers,
} from "../functions";
import Input from "./components/Input";
import './css/Create-order.css'

const Create = () => {
  const [cars, setCar] = useState([]);
  const [drivers, setDriver] = useState([]);
  const [routes, setRoute] = useState([]);

  useEffect(async () => {
    if (cars.length === 0) {
      setCar(await GetCars());
    }

    if (routes.length === 0) {
      setRoute(await GetRoutes());
    }

    if (drivers.length === 0) {
      setDriver(await GetUsers("role=DRIVER"));
    }
  }, [cars, routes, drivers]);

  return (
    <div>
      <Navbar />


      <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i"
            rel="stylesheet" />

          <div className="page-wrapper mt-5 bg-gra-03 p-t-45 p-b-50 pt-5 mt-0">
            <div className="wrapper wrapper--w790">
              <div className="card card-5">
                <div className="card-heading">
                  <h2 className="title">Регистрация заказа</h2>
                </div>
                <div className="card-body">
                  <form method="POST">
                    <div id="products">
                      <div className="product">
                        <div className="row mb-2">
                          <div className="col-sm-2">
                            <div className="name fw-bold">Ед. изм.</div>
                            <div className="value">
                              <div className="input-group">
                                <input id="product-unit" className="product-unit input--style-5" name="unit" required />
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-3">
                            <div className="name fw-bold">Кол-во</div>
                            <div className="value">
                              <div className="input-group">
                                <input id="product-qty" className="product-qty input--style-5" name="quantity" min="1"
                                       type="number" required />
                              </div>
                            </div>
                          </div>


                          <div className="col-sm-5">
                            <div className="name fw-bold">Характеристика</div>
                            <div className="value">
                              <div className="input-group">
                                <input id="product-char" className="product-char input--style-5" required />
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-3">
                            <div className="name fw-bold">Примерная цена</div>
                            <div className="value">
                              <div className="input-group">
                                <input id="product-aprice" type="number" className="product-aprice input--style-5"
                                       min="1" required />
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-1">
                            <div className="value">
                              <div className="input-group mt-5">
                                <h5>Сум</h5>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-3">
                            <div className="name fw-bold">CCL</div>
                            <div className="value">
                              <div className="input-group">
                                <input id="ccl" type="text" className="product-ccl input--style-5" required />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row mb-2 p-2">
                      <div className="input-group">
                        <label htmlFor="product-comment">Основания для закупа</label>
                        <input id="product-comment" className="product-comment input--style-5" name="quantity"
                               type="text" required />
                      </div>
                    </div>


                    <hr className="m-4" />

                      <div>
                        <button className="btn1 btn--radius-2 btn-success" id="sub-btn" type="submit">Зарегистрировать
                        </button>
                      </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

    </div>
  );
};

export default Create;
