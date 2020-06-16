import React from "react";

import { Switch, Route } from "react-router-dom";

import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";
import routes from "../router";

import Footer from "./Footer/Footer";
const layout = (props) => {
    return (
        <div>
            <Header />
            <NavBar />
            <Switch>
                {routes.map((route, i) => (
                    <Route
                        key={i}
                        path={route.path}
                        // exact={route.exact}
                        children={<route.component />}
                    />
                ))}
            </Switch>
            <Footer />
        </div>
    );
};
export default layout;
