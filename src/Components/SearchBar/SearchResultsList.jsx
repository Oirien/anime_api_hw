import React from "react";
import SearchResult from "./SearchResult";
import "./SearchResultsList.css";

const SearchResultsList = ({ searchBar }) => {
    return (
        <div className="search-results__list">
            {searchBar.map((search, i) => {
                if (search.title_english || search.title) {
                    return <SearchResult searchResult={search.title_english || search.title} searchId={search.mal_id} key={i} />;
                } else {
                    return null;
                }
            })}
        </div>
    );
};

export default SearchResultsList;
