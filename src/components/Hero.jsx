import React from 'react';

const Hero = () => {
  return (
    <section className="hero" id="home">
      {/* Announcement Badge */}
      <div>
        <br />
        <br />
        <br />
        <br />
      </div>

      {/* Main Hero Content */}
      <div>
        <h1 className="hero-title">
         Welcome to 
          <br />
         My <span className="gradient-text">Portfolio</span>
        </h1>

        {/* Profile Section */}
        <div className="hero-subtitle">
          <span>Hello, I'm Mohamad Halal</span>
          <span>a Software Engineer</span>
        </div>

        {/* CTA Buttons */}
        <div className="hero-cta">
          <div className="cta-buttons">

            <a href="mailto:mohamadhalal20@gmail.com" className="connect-button">
              Mail Me
              <span> ✉</span>
            </a>

             <a href="tel:+13435588759" className="connect-button">
              Call Me
              <span> ☏</span>
            </a>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;