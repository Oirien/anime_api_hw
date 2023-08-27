import React, { useState } from "react";
import "./Header.css";
import { Link, Outlet } from "react-router-dom";
import SFWToggle from "./SFWToggle";
import CurrentlyAiringToggle from "./CurrentlyAiringToggle";

const Header = ({ sfw, setSfw, airing, setAiring }) => {
    return (
        <>
            <nav className="header-full">
                <ul className="header-wrapper container">
                    <li className="logo">
                        <Link to="/anime">
                            weeb<span className="logo-span">Radar</span>
                        </Link>
                    </li>
                    <li className="header__text">
                        <SFWToggle sfw={sfw} setSfw={setSfw}></SFWToggle>
                    </li>
                    <li className="header__text">
                        <CurrentlyAiringToggle airing={airing} setAiring={setAiring} />
                    </li>
                    <Link to="/anime/favorites">
                        <li className="header__text favorites__header">Favorites</li>
                    </Link>
                </ul>
            </nav>
            <div id="detail">
                <Outlet />
            </div>
        </>
    );
};

export default Header;
