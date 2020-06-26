import React from "react";
import "./Homepage.scss";

import { Button } from "../../components";
import { useHistory } from "react-router-dom";

const HomePage = () => {
    const homepageCategories = [
        {
            name: "Men",
            img: "/img/home-pic-men.webp",
        },
        {
            name: "Women",
            img: "/img/home-pic-women.webp",
        },
        {
            name: "Boys",
            img: "/img/home-pic-boys.webp",
        },
        {
            name: "Girls",
            img: "/img/home-pic-girls.webp",
        },
    ];
    const history = useHistory();
    return (
        <div className="homepage__container">
            <div className="homepage__cover">
                <img
                    src="/img/cover.jpg"
                    height="666px"
                    alt="cover"
                    className="img-fluid"
                ></img>
                <Button
                    onClick={() => {
                        history.push("/products");
                    }}
                    className="button--primary homepage__cover-button"
                >
                    <span className="text--bold">Shop now</span>
                </Button>
            </div>

            <div className="container-fluid">
                <div className="row">
                    {homepageCategories.map(({ name, img }) => {
                        return (
                            <div
                                key={name}
                                className="homepage__pic-container text--center"
                            >
                                <img
                                    src={img}
                                    className="homepage__pic img-fluid"
                                    alt="home-pic"
                                ></img>
                                <div className="homepage__overlay">
                                    <h2 className="text--white">{name}</h2>
                                    <hr className="homepage__hr" />
                                    <Button
                                        onClick={() => {
                                            history.push("/products");
                                        }}
                                        className="button--primary homepage__pic-button"
                                    >
                                        <span className="text--bold">
                                            Shop now
                                        </span>
                                    </Button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
export default HomePage;
