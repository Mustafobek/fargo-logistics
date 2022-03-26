import React from "react";
import {Routes, Route} from "react-router-dom";
import {Login} from "./pages/Login";
import {NotFound} from "./pages/NotFound";
import Main from "./pages/Main";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/main" element={<Main/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </>
    )
}

export default App