import React, {useState} from "react";
import './Login.css'
import axios from "axios";
import {HOST} from "../constants";
import {useHistory, useNavigate} from "react-router-dom";

export const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigator = useNavigate()

    const onUsernameChange = (event) => {
        setUsername(event.target.value)
    }

    const onPasswordChange = (ev) => {
        setPassword(ev.target.value)
    }

    const onSubmit = async ev => {
        ev.preventDefault()

        try {
            const {data} = await axios.post(HOST + '/api/auth/login', {
                username: username,
                password: password
            }, {})

            if(data.success) {
                console.log(data)
                localStorage.setItem('token', data.data.token)
                navigator('main')
            } else {
                setError('Invalid Data')
                setTimeout(() => {
                    setError('')
                }, 5000)
            }
        } catch (e) {
            setError('Invalid Data')

            setTimeout(() => {
                setError('')
            }, 5000)
        }
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <h2 className="text-center text-dark mt-5">Login Form</h2>
                        <div className="text-center mb-5 text-danger">{error}</div>
                        <div className="card my-5">

                            <form className="card-body cardbody-color p-lg-5">
                                <div className="text-center">
                                    <img src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png"
                                         className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                                         width="200px" alt="profile"/>
                                </div>

                                <div className="mb-3">
                                    <input type="text" className="form-control" id="username"
                                           placeholder="User Name"
                                           onChange={onUsernameChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <input type="password" className="form-control" id="password"
                                           placeholder="password"
                                           onChange={onPasswordChange}
                                    />
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-color px-5 mb-5 w-100" onClick={onSubmit}>Login</button>
                                </div>
                                <div id="emailHelp" className="form-text text-center mb-5 text-dark">Not
                                    Registered? <a href="#" className="text-dark fw-bold"> Create an
                                        Account</a>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}