import React from "react";
import memesData from "../memesData.js";
import "./index.css";
export default function App() {
  const [memeImage, setMemeImage] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1kpw4.jpg",
  })
const [allMemeImages, setAllMemeImages] = React.useState(memesData)

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url)
    setMemeImage(prevMeme => ({
      ...prevMeme,
      randomImage: URL
    }))
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form--input"
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
        />

        <button
          className="form--button"
          onClick={getMemeImage}
        >
          Get a new meme image 🖼
        </button>
      </div>
      {memeImage && <img src={memeImage} className="meme--image" alt="Meme" />}
    </main>
  );

}


