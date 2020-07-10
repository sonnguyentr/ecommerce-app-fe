import React from "react";
import Logo from "../../Layout/Footer/FooterLogo";
import LeftBar from "./LeftBar/LeftBar";
import "./SellerDashboard.scss";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import sellerRoutes from "../../router/seller";

const SellerDasboard = ({ props }) => {
    const { path } = useRouteMatch();
    return (
        <div className="seller-dashboard">
            <div className="row">
                <div className="col-auto text-center">
                    <Logo />
                    <LeftBar />
                </div>
                <div className="col-10">
                    <Switch>
                        {sellerRoutes.map((route, i) => {
                            const Component = route.component;
                            return (
                                <Route
                                    key={i}
                                    path={path + route.path}
                                    children={<Component />}
                                />
                            )
                        }
                        )}
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default SellerDasboard;
