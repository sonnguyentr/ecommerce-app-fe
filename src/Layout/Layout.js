import React from "react";
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";

import Footer from "./Footer/Footer";
const layout = (props) => {
    return (
        <div>
            <Header />
            <NavBar />
            <Footer />
        </div>
    );
};
export default layout;
