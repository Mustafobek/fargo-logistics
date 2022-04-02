import React from "react";
import {Routes, Route} from "react-router-dom";
import {Login} from "./pages/Login";
import {NotFound} from "./pages/NotFound";
import Main from "./pages/Main";
import Order from "./pages/components/Order";
import Create from "./pages/Create";
import Completed from "./pages/Completed";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/main" element={<Main/>} />
                <Route path="/order/:id" element={<Order/>} />
                <Route path="/create-order" element={<Create/>} />
                <Route path="/completed" element={<Completed/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </>
    )
}

export default App