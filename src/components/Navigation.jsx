import React from 'react';

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-content">
          <div className="nav-logo">MH</div>
          <ul className="nav-links">
            <li><a href="#home" className="nav-button">Home</a></li>
            <li><a href="#about" className="nav-button">About</a></li>
            <li><a href="#work" className="nav-button">Works</a></li>
            <li><a href="#resume" className="nav-button">Resume</a></li>
            
          </ul>
          <a href="mailto:mohamadhalal20@gmail.com" className="nav-button cta">Contact Me</a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;