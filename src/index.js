import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./main/Home";
import Login from "./user/Login";
import Story from "./main/Story";
import Order from "./main/Order";
import Recipe from "./main/Recipe";
import Service from "./main/Service";
import Join from "./user/Join";

export const PAGE_DATA = [
    {
        name: "order",
        page: <Order/>,
    },
    {
        name: "story",
        page: <Story/>,
    },
    {
        name: "recipe",
        page: <Recipe/>,
    },
    {
        name: "service",
        page: <Service/>,
    },
]

function App() {
    return (
        <>
            <switch>
                <Route exact path={"/"} component={Home}/>
                <Route path={"/:page"}>
                    <Home/>
                </Route>
                <Route path={"/auth/login"} component={Login}/>
                <Route path={"/auth/join"} component={Join}/>
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
