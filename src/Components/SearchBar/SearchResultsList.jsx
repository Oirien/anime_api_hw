import React from "react";
import SearchResult from "./SearchResult";
import "./SearchResultsList.css";

const SearchResultsList = ({ searchBar }) => {
    return (
        <div className="search-results__list">
            {searchBar.map((search, i) => {
                return <SearchResult searchResult={search.title_english} searchId={search.mal_id} key={i} />;
            })}
        </div>
    );
};

export default SearchResultsList;
