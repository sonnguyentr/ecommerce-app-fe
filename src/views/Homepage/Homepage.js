import React from "react";
import "./Homepage.scss";

import {Button} from '../../components'

const HomePage = () => {
    const homepageCategories = [
        {
            name: "Men",
            img: "/img/home-pic-men.webp"
        },
        {
            name: "Women",
            img: "/img/home-pic-women.webp"
        },
        {
            name: "Boys",
            img: "/img/home-pic-boys.webp"
        },
        {
            name: "Girls",
            img: "/img/home-pic-girls.webp"
        },
    ]
    return (
        <div className="homepage__container">
            <div className="homepage__cover">
                <img src="/img/cover.jpg" height="666px" alt="cover" className="img-fluid"></img>
                <Button className="--primary homepage__cover-button">
                    <span className="text--bold">Shop now</span>
                </Button>
            </div>

            <div className="container-fluid">
                <div className="row">
                    {
                        homepageCategories.map(cat => {
                            return (
                                <div key={cat.name} className="homepage__pic-container text--center">
                                    <img
                                        src={cat.img}
                                        className="homepage__pic img-fluid"
                                        alt="home-pic"
                                    ></img>
                                    <div className="homepage__overlay">
                                        <h2 style={{marginBottom: 10}} className="text--white">{cat.name}</h2>
                                        <hr className="homepage__hr" />
                                        <Button className="--primary homepage__pic-button">
                                            <span className="text--bold">Shop now</span>
                                        </Button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                {/* <div className="homepage__pic-container text--center">
                    <img
                        src="/img/home-pic2.webp"
                        className="homepage__pic"
                        alt="home-pic"
                    ></img>
                    <div className="homepage__overlay">
                        <h2 style={{marginBottom: 10}} className="text--white">Women</h2>
                        <hr className="homepage__hr" />
                        <button
                            style={{}}
                            className="button --primary homepage__pic-button"
                        >
                            <span>Shop now</span>
                        </button>
                    </div>
                </div> */}
            </div>
        </div>
    );
};
export default HomePage;
