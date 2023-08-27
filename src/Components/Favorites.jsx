import React from "react";
import { Link } from "react-router-dom";
import "./Favorites.css";

const Favorites = ({ favorites, setFavorites }) => {
    const handleRemoveFavorite = favorite => {
        const favoriteToRemove = favorites.filter(favorites => favorites !== favorite);
        setFavorites(favoriteToRemove);
    };

    return (
        <div className="container flex top__spacing favorites__grid">
            {favorites.map((show, i) => (
                <>
                    <div classname="image-grid">
                        <div key={i} className="image-actual-wrapper">
                            <Link to={`/anime/${show.mal_id}`}>
                                <img src={show.images.jpg.large_image_url} height="300px" width="210px" />
                            </Link>
                        </div>
                        <h3
                            className="remove--button"
                            onClick={() => {
                                handleRemoveFavorite(show);
                            }}>
                            Remove Favorite
                        </h3>
                        <h3 className="image-title">{show.title_english}</h3>
                    </div>
                </>
            ))}
        </div>
    );
};

export default Favorites;
