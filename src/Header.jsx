export default function Header() {
    return (
        <header className="header">
            {/* Use /vite.svg if it's in the public folder */}
            <img 
                src="/vite.svg"
                className="header-image"
                alt="Vite Logo"  // Always include alt text for accessibility
            />
            <h2 className="header-title">Meme Generator</h2> 
            <h4 className="header-project">React Project - DJS07</h4>
        </header>
    );
}