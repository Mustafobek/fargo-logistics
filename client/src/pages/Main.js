import React from 'react';
import Navbar from "./components/Navbar";
import MainCard from "./components/MainCard";

export const Main = () => {



    return (
        <>
            <Navbar />

            <div className="container">
                <MainCard />
            </div>
        </>
    );
};

export default Main;