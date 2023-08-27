import React from "react";
import { Link } from "react-router-dom";

const Top25 = ({ anime }) => {
    return (
        <>
            <div className="image-grid__full">
                <ul className="image-grid-wrapper container">
                    <h1 className="bouncer"> What's on your radar?</h1>
                    <div className="image-grid-container">
                        {anime.map((show, i) => (
                            <li key={i} className="image-grid">
                                <div className="image-actual-wrapper">
                                    <Link to={`/anime/${show.mal_id}`}>
                                        <img className="image-actual" height="300px" width="210px" src={show.images.jpg.large_image_url} />
                                    </Link>
                                </div>
                                <h3 className="image-title">{show.title_english !== null ? show.title_english : show.title}</h3>
                            </li>
                        ))}
                    </div>
                </ul>
            </div>
        </>
    );
};

export default Top25;
