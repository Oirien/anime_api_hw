import React, { useEffect, useState } from "react";
import "./MainPage.css";
import Top25 from "../Components/Top25";

const MainPage = ({ sfw }) => {
    const [anime, setAnime] = useState([]);

    useEffect(() => {
        const apiUrl = sfw ? "https://api.jikan.moe/v4/top/anime?type=tv&&sfw" : "https://api.jikan.moe/v4/top/anime?type=tv";

        fetch(apiUrl)
            .then(res => res.json())
            .then(data => setAnime(data.data));
    }, [sfw]);

    return (
        <>
            <div className="mainpage__bg--wrapper">
                <img className="mainpage__bg" src="https://images.hdqwalls.com/wallpapers/synthwave-night-sunset-anime-girl-4k-2j.jpg" />
            </div>
            <Top25 anime={anime} />
        </>
    );
};

export default MainPage;
