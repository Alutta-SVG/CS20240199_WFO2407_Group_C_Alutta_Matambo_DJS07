import React from "react";

export default function Meme() {
    return (
        <main>
            <form className = "form">
                <div>
                    <input 
                     type="text"
                    placeholder="Shut up"
                    className="form--input">
                    </input>
                </div>
                <div>
                    <input type="text"
                    placeholder="and take my money"
                    className="form--input">
                    </input>
                </div>
                <button
                className="form--button" 
                >
                    Get a new meme image 
                </button>
            </form>
        </main>
    )
}