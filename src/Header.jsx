import React from 'react';
export default function Header() {
    
    return (
        <header className="header">
            {/* Use /vite.svg if it's in the public folder */}
           
           <div className="header-container">
           <img
                src="/vite.svg"
                className="header-image"
                alt="Vite Logo"
            />

    <h2 className="header-title">Meme Generator</h2>

    <h4 className="header-project">React Project - DJS07</h4>
</div>


        </header>
    );
}