import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./IndividualPage.css";

const IndividualPage = () => {
    const [anime, setAnime] = useState({});
    const { id } = useParams();
    console.log(anime);

    useEffect(() => {
        fetch(`https://api.jikan.moe/v4/anime/${id}`)
            .then(res => res.json())
            .then(data => setAnime(data.data));
    }, [id]);

    return (
        <>
            <div>
                <h1 className="test">{anime.title_english}</h1>
            </div>
        </>
    );
};

export default IndividualPage;
