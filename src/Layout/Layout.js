import React from "react";
import "./Layout.scss";

import { Switch, Route } from "react-router-dom";

import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";
import routes from "../router";

import Footer from "./Footer/Footer";
const Layout = (props) => {
    return (
        <div>
            <Header />
            <NavBar />
            <section className="layout__section">
                <Switch>
                    {routes.map((route, i) => {
                        const Component = route.component 
                        return(
                            <Route
                            key={i}
                            path={route.path}
                            children={<Component/>}
                        />
                    )})
                }
                </Switch>
            </section>
            <Footer />
        </div>
    );
};
export default Layout;
