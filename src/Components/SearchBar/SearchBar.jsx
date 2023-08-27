import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ setSearchBar, sfw, airing }) => {
    const [input, setInput] = useState("");

    const fetchData = value => {
        const apiUrl =
            sfw && !airing
                ? `https://api.jikan.moe/v4/anime?q=${value}&sfw`
                : sfw && airing
                ? `https://api.jikan.moe/v4/anime?q=${value}&status=airing&sfw`
                : !sfw && airing
                ? `https://api.jikan.moe/v4/anime?q=${value}&status=airing`
                : `https://api.jikan.moe/v4/anime?q=${value}`;

        value.length >= 4
            ? fetch(apiUrl)
                  .then(res => res.json())
                  .then(data => setSearchBar(data.data))
            : null;
    };

    const handleInput = value => {
        setInput(value);
        fetchData(value);
    };

    return (
        <>
            <div className="input__wrapper">
                <input type="text" placeholder="Type to search..." value={input} onChange={e => handleInput(e.target.value)} />
            </div>
        </>
    );
};

export default SearchBar;
