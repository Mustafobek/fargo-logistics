import React, { useState } from "react";
import "./css/Login.css";
import axios from "axios";
import { HOST } from "../constants";
import { useHistory, useNavigate } from "react-router-dom";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigator = useNavigate();

  const onUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const onPasswordChange = (ev) => {
    setPassword(ev.target.value);
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();

    try {
      const { data } = await axios.post(
        HOST + "/api/auth/login",
        {
          username: username,
          password: password,
        },
        {}
      );

      if (data.success) {
        console.log(data);
        localStorage.setItem("token", data.data.token);
        navigator("main");
      } else {
        setError("Invalid Data");
        setTimeout(() => {
          setError("");
        }, 5000);
      }
    } catch (e) {
      setError("Invalid Data");

      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div>
      <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" />
      <script src="//code.jquery.com/jquery-1.11.1.min.js" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"
      />
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
        crossOrigin="anonymous"
      />

      <section
        className="h-100 gradient-form"
        style={{ backgroundColor: "#eee" }}
      >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <img
                          src="https://cdn6.f-cdn.com/contestentries/1922851/50627310/6079e5e407b87_thumb900.jpg"
                          className="pb-5"
                          style={{ width: "150px" }}
                          alt="logo"
                        />
                        <h4 className="mt-1 mb-5 pb-1">
                          <strong>Мы - команда ФАРГО</strong>
                        </h4>
                      </div>

                      <form id="form">
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="username">
                            Пользователь
                          </label>
                          <input
                            type="text"
                            id="username"
                            className="form-control"
                            placeholder="Александр К."
                            onChange={onUsernameChange}
                          />
                        </div>

                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="password">
                            Пароль
                          </label>
                          <input
                            type="password"
                            id="password"
                            className="form-control"
                            placeholder="12345"
                            onChange={onPasswordChange}
                          />
                        </div>

                        <div className="text-center pt-1 mb-5 pb-1">
                          <button
                            className="btn btn-success"
                            type="submit"
                            onClick={onSubmit}
                          >
                            Войти
                            <i className="ps-1 bx bx-log-in" />
                          </button>
                        </div>

                        <div className="row">
                          <div className="col-sm-2" />
                          <div className="col-sm-2 mb-2">
                            <a
                              className="btn btn-lg btn-secondary"
                              href="https://telegram.me/fargouz"
                              target="_blank"
                            >
                              <i className="fab fa-telegram" />
                            </a>
                          </div>
                          <div className="col-sm-2 mb-2">
                            <a
                              className="btn btn-lg btn-danger"
                              href="https://instagram.com/fargo_delivery"
                              target="_blank"
                            >
                              <i className="fab fa-instagram" />
                            </a>
                          </div>
                          <div className="col-sm-2 mb-2">
                            <a
                              className="btn btn-lg btn-success"
                              href="http://fargo.uz"
                              target="_blank"
                            >
                              <i className="fas fa-truck-loading" />
                            </a>
                          </div>
                          <div className="col-sm-2 mb-2">
                            <a
                              className="btn btn-lg btn-primary"
                              href="https://www.facebook.com/fargo.uz"
                              target="_blank"
                            >
                              <i className="fab fa-facebook" />
                            </a>
                          </div>
                          <div className="col-sm-2" />
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h1 className="mb-2">FARGO</h1>
                      <hr />
                      <h5 className="mb-0">Управление закупами</h5>
                      <h1 id="header" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
