import React, { useState } from "react";
import "./Header.css";
import { Link, Outlet } from "react-router-dom";
import SFWToggle from "./SFWToggle";

const Header = ({ sfw, setSfw }) => {
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
                    <li className="header__text">Button Top25 Anime</li>
                    <li className="header__text">Button Top25 Manga</li>
                    <li className="header__text">Button Top25 Movies</li>
                </ul>
            </nav>
            <div id="detail">
                <Outlet />
            </div>
        </>
    );
};

export default Header;
