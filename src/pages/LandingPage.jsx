import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; 

const LandingPage = () => {
  useEffect(() => {
    const spotlight = document.querySelector('[data-element="spotlight"]');

    function move(e) {
      spotlight.style.setProperty("--spotlight-x", `${e.clientX}px`);
      spotlight.style.setProperty("--spotlight-y", `${e.clientY}px`);
    }

    if (window.matchMedia("(hover: hover)").matches) {
      document.addEventListener("mousemove", move);
    }

    return () => {
      document.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div className="landing-page">
      <video autoPlay muted loop>
        <source src="/videos/landingbg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div data-element="spotlight" className="spotlight"></div>
      <Link to="/home" className="home-link"> {/* Link to Home page */}
        <h1>KITCH</h1>
      </Link>
      <h2 className="creator">INTERACTIVE MEDIA DESIGNER</h2>
    </div>
  );
};

export default LandingPage;
