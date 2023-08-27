import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Top25 = ({ anime }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: false,
        autoplaySpeed: 1000,
    };

    return (
        <>
            {/* This code block is being kept in case the slider breaks irreparably  */}
            {/* <div className="image-grid__full">
                <ul className="image-grid-wrapper container">
                    <h1 className="bouncer"> What's on your radar?</h1>
                    <div >
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
            </div> */}

            <div className="image-grid-wrapper container">
                <h1 className="bouncer top25--spike"> What's on your radar?</h1>
                <Slider {...settings}>
                    {anime.map((show, i) => (
                        <div className="image-actual-wrapper" key={i}>
                            <Link to={`/anime/${show.mal_id}`}>
                                <img className="image-actual" height="300px" width="210px" src={show.images.jpg.large_image_url} />
                            </Link>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
};

export default Top25;
