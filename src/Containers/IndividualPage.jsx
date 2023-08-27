import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./IndividualPage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const IndividualPage = ({ favorites, setFavorites }) => {
    const [anime, setAnime] = useState({});
    const { id } = useParams();
    const [recommendations, setRecommendations] = useState([]);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: false,
        autoplaySpeed: 1000,
        adaptiveHeight: true,
    };

    useEffect(() => {
        fetch(`https://api.jikan.moe/v4/anime/${id}`)
            .then(res => res.json())
            .then(data => {
                setAnime(data.data);
                setAnimeBackground(data.data.images.jpg.large_image_url);
            });
        fetch(`https://api.jikan.moe/v4/anime/${id}/recommendations`)
            .then(res => res.json())
            .then(data => setRecommendations(data.data));
    }, [id]);
    console.log(recommendations);

    return (
        <>
            <div className="indivpage__hero--bg--wrapper">
                <img className="indivpage__hero--bg" src={anime.images?.jpg?.large_image_url} />
            </div>
            <div>
                <h3 className="favorite__button" onClick={() => setFavorites(...favorites, anime)}>
                    Add to Favorites
                </h3>
            </div>
            <div className="detail__block">
                <p className="detail__name">English Title:</p>
                <p className="detail__info">{anime.title_english}</p>
                <p className="detail__name">Japanese Title: </p>
                <p className="detail__info">{anime.title_japanese}</p>
                <p className="detail__name">Status: </p>
                <p className="detail__info">{anime.status}</p>
                <p className="detail__name">Rating:</p>
                <p className="detail__info">{anime.rating}</p>
                <p className="detail__name">Episode Length: </p>
                <p className="detail__info">{anime.duration}</p>
                <p className="detail__name">Average Score:</p>
                <p className="detail__info">{anime.score}</p>
                <p className="detail__name">Scored by </p>
                <p className="detail__info">{anime.scored_by} users</p>
                <p className="detail__name">Overall Ranking: </p>
                <p className="detail__info">{anime.rank}</p>
                <p className="detail__name">Favorited by: </p>
                <p className="detail__info">{anime.favorites}</p>
            </div>
            <div className="indivpage__wrapper container">
                <img className="indivpage__hero--poster" src={anime.images?.jpg?.large_image_url} />
                <h1 className="indivpage__title bouncer">{anime.title_english ? anime.title_english : anime.title}</h1>
            </div>
            <div className="container indivpage__synopsis">{anime.synopsis}</div>
            <div className="container indivpage__right">
                <Slider {...settings}>
                    {recommendations?.map((show, i) => (
                        <>
                            <div className="image-grid" key={i}>
                                <div className="image-actual-wrapper">
                                    <Link to={`/anime/${show.entry.mal_id}`}>
                                        <img
                                            className="image-actual"
                                            height="300px"
                                            width="210px"
                                            src={show.entry.images.jpg.large_image_url}
                                        />
                                    </Link>
                                </div>
                                <h3 className="image-title">{show.entry.title}</h3>
                            </div>
                        </>
                    ))}
                </Slider>
            </div>
        </>
    );
};

export default IndividualPage;
<span></span>;
