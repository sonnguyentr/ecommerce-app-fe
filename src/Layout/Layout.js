import React from "react";

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
            <section style={{ padding: "30px 0", maxWidth: "1465px", margin: "auto" }}>
                <Switch>
                    {routes.map((route, i) => (
                        <Route
                            key={i}
                            path={route.path}
                            children={<route.component />}
                        />
                    ))}
                </Switch>
            </section>
            <Footer />
        </div>
    );
};
export default Layout;
