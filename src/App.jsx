import React from "react";
import memesData from "../memesData.js";
import "./index.css";

export default function App() {
  const [memeImage, setMemeImage] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1kpw4.jpg", // Default image
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes; // Use the `allMemeImages` state
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const randomImageUrl = memesArray[randomNumber].url;

    setMemeImage((prevMeme) => ({
      ...prevMeme, // Preserve `topText` and `bottomText`
      randomImage: randomImageUrl, // Update only `randomImage`
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form--input"
          value={memeImage.topText}
          onChange={(e) =>
            setMemeImage((prevMeme) => ({
              ...prevMeme,
              topText: e.target.value,
            }))
          }
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
          value={memeImage.bottomText}
          onChange={(e) =>
            setMemeImage((prevMeme) => ({
              ...prevMeme,
              bottomText: e.target.value,
            }))
          }
        />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img
          src={memeImage.randomImage}
          className="meme--image"
          alt="Meme"
        />
        <h2 className="meme--text top">{memeImage.topText}</h2>
        <h2 className="meme--text bottom">{memeImage.bottomText}</h2>
      </div>
    </main>
  );

}