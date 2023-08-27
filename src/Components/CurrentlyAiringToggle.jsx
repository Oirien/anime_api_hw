import React from "react";
import "./Toggle.css";

const CurrentlyAiringToggle = ({ airing, setAiring }) => {
    const handleSetAiring = () => {
        return setAiring(!airing);
    };
    return (
        <>
            <div className="flex">
                <h3 className="nsfw">Currently Airing</h3>
                <label className="switch">
                    <input type="checkbox" onClick={handleSetAiring} />
                    <span className="slider round"></span>
                </label>
            </div>
        </>
    );
};

export default CurrentlyAiringToggle;
