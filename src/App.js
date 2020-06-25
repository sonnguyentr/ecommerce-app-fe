import React from "react";
import "./App.scss";
import Layout from "./Layout/Layout";
import { Switch, Route } from "react-router-dom";
import SellerDasboard from "./views/SellerDashboard/SellerDashboard";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path="/seller-dashboard">
                    <SellerDasboard />
                </Route>
                <Route>
                    <Layout />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
