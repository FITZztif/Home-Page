import React from 'react';
function HeroSection() {
    const navigateToURL = () => {
        window.location.href = "https://sit-317-prototype.vercel.app/";
    }
    return (
        <section className="hero-container" id="hero">
            <h1 className="title">Welcome to Around U</h1>
            <p className="description">Connect Globally, Belong Locally</p>
            <button className="action-button" onClick={navigateToURL}>Get Started</button>
        </section>
    );
}

export default HeroSection;
