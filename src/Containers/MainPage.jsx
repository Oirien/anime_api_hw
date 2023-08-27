import React, { useEffect, useState } from "react";
import "./MainPage.css";
import Top25 from "../Components/Top25";
import SearchBar from "../Components/SearchBar/SearchBar";
import SearchResultsList from "../Components/SearchBar/SearchResultsList";

const MainPage = ({ sfw, airing, searchBar, setSearchBar }) => {
    const [anime, setAnime] = useState([]);

    useEffect(() => {
        const apiUrl =
            sfw && !airing
                ? "https://api.jikan.moe/v4/top/anime?type=tv&sfw"
                : sfw && airing
                ? "https://api.jikan.moe/v4/top/anime?type=tv&filter=airing&sfw"
                : !sfw && airing
                ? "https://api.jikan.moe/v4/top/anime?type=tv&filter=airing"
                : "https://api.jikan.moe/v4/top/anime?type=tv";

        fetch(apiUrl)
            .then(res => res.json())
            .then(data => setAnime(data.data));
    }, [sfw, airing]);

    console.log("Airing: ");
    console.log(airing);
    console.log("SFW: ");
    console.log(sfw);
    console.log(searchBar);

    return (
        <>
            <div className="mainpage__bg--wrapper">
                <img className="mainpage__bg" src="https://images.hdqwalls.com/wallpapers/synthwave-night-sunset-anime-girl-4k-2j.jpg" />
            </div>
            <div>
                <SearchBar setSearchBar={setSearchBar} sfw={sfw} airing={airing} />
                {searchBar && searchBar.length > 0 && <SearchResultsList searchBar={searchBar} />}
            </div>
            <Top25 anime={anime} />
        </>
    );
};

export default MainPage;
