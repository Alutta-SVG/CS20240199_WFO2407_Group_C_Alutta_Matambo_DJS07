import React from "react";
function App() {

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

export default App
