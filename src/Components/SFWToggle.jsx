import React from "react";
import "./Toggle.css";

const SFWToggle = ({ sfw, setSfw }) => {
    const handleSetSfw = () => {
        return setSfw(!sfw);
    };
    return (
        <>
            <div className="flex">
                <h3 className="nsfw">NSFW</h3>
                <label className="switch">
                    <input
                        type="checkbox"
                        onClick={() => {
                            handleSetSfw();
                        }}
                    />
                    <span className="slider round"></span>
                </label>
            </div>
        </>
    );
};

export default SFWToggle;
