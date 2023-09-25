import React from 'react';
import AboutUs from '../assets/images/team-building.jpg'
function AboutUsSection() {
    return (
        <section className="about-container" id="about" data-aos="fade-up">
            <img className="about-image" src={AboutUs} alt="About Us" />
            <div className="about-content">
                <h2 className="about-title">About Us</h2>
                <p className="about-description">
                    At "Around U", we believe in the power of community. Our journey began with a simple idea: to bridge the gap between international students in Australia and the vibrant local life they are part of. As international students ourselves, we recognized the challenges faced in acclimating to a new environment, from understanding local customs to finding the best local hangouts.
                    <br/><br/>
                    "Around U" was born out of this need. Our platform provides a haven for international students, connecting them not just to each other but to the heart of Australian localities. Here, users can discover events, share experiences, and immerse themselves in the rich tapestry of Australian culture.
                    <br/><br/>
                    Our motto, "Connect globally, belong locally", encapsulates our mission. While we celebrate our global roots, we embrace the local essence that makes each of our experiences unique and enriching.
                </p>
            </div>
        </section>
    );
}

export default AboutUsSection;
