import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./main/Home";
import Order from "./main/Order";
import Delivery from "./main/Delivery";
import Login from "./user/Login";
import Recipe from "./main/Recipe";
import Service from "./main/Service";
import Join from "./user/Join";

function App() {
    return (
        <>
            <switch>
                <Route exact path={"/"} component={Home}/>
                <Route path={"/order"} component={Order}/>
                <Route path={"/delivery"} component={Delivery}/>
                <Route path={"/recipe"} component={Recipe}/>
                <Route path={"/service"} component={Service}/>
                <Route path={"/user/login"} component={Login}/>
                <Route path={"/user/join"} component={Join}/>
            </switch>
        </>
    );
}

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
);
