import React from "react";
import { Link } from "react-router-dom";
import "./SearchResult.css";

const SearchResult = ({ searchResult, searchId }) => {
    return (
        <div>
            <Link className="search__result" to={`/anime/${searchId}`}>
                {searchResult}
            </Link>
        </div>
    );
};

export default SearchResult;
