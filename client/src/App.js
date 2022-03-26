import React from "react";
import {Routes, Route} from "react-router-dom";
import {Login} from "./pages/Login";
import {NotFound} from "./pages/NotFound";
import Main from "./pages/Main";
import Order from "./pages/Order";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/main" element={<Main/>} />
                <Route path="/:id" element={<Order/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </>
    )
}

export default App