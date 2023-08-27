import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./IndividualPage.css";

const IndividualPage = () => {
    const [anime, setAnime] = useState({});
    const { id } = useParams();
    const [animeBackground, setAnimeBackground] = useState("");

    useEffect(() => {
        fetch(`https://api.jikan.moe/v4/anime/${id}`)
            .then(res => res.json())
            .then(data => {
                setAnime(data.data);
                setAnimeBackground(data.data.images.jpg.large_image_url);
            });
    }, [id]);

    return (
        <>
            <div className="indivpage__hero--bg--wrapper">
                <img className="indivpage__hero--bg" src={anime.images?.jpg?.large_image_url} />
            </div>
            <div className="indivpage__wrapper container">
                <img className="indivpage__hero--poster" src={anime.images?.jpg?.large_image_url} />
                <h1 className="indivpage__title bouncer">{anime.title_english ? anime.title_english : anime.title}</h1>
            </div>
            <div className="container indivpage__synopsis">{anime.synopsis}</div>
        </>
    );
};

export default IndividualPage;
