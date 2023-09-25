import React from 'react';
function NavBar() {
    return (
        <div className="navbar-container">
            <div className="logo">Around U</div>
            <div className="nav-links">
                <a className="link" href="#hero">Home</a>
                <a className="link" href="#features">Features</a>
                <a className="link" href="#about">About</a>
                <a className="link" href="#testimonials">Testimonials</a>
            </div>
        </div>
    );
}

export default NavBar;

