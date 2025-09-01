import React from 'react';
import Websiteous from '../images/Websiteous.png';

const AboutSection = () => {


  const projects = [
    {
      title: "Carleton University",
      description: "Pursuing a Software Engineering Degree at Carleton University",
      status: "Education"
    },
    {
      title: "4+ Years of Experience",
      description: "Over 4 years of experience in software development inluding personal projects and freelance work",
      status: "Work Experience"
    },
    {
      title: "Always Building",
      description: "Currently building a SaaS Application",
      status: "In Progress"
    }
  ];

    const openWebsiteous = () => {
    window.open("https://websiteous.com/", "_blank");
  };

  return (
    <section className="work-section" id="about">
      <div className="work-header">
        <p className="work-label">Learn More</p>
        <h2 className="work-title">
         About <span className="gradient-text">Me</span>
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <span className="project-badge">{project.status}</span>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>

      {/* Featured Project Card */}
      <div className="featured-project">
        <div className="featured-content">
          <div>
            <span className="featured-badge">Major Contribution</span>
            <h3 className="featured-title">
             My Time as a Frontend Developer at Websiteous
            </h3>
            <p className="featured-description">
              During my time at Websiteous, I contributed to various projects, communicating with clients to understand their needs and delivering high-quality frontend solutions. My role involved collaborating with designers and backend developers to create seamless user experiences.
            </p>
          </div>
          <div className="featured-preview">
            <div className="preview-placeholder">
            <img  onClick={openWebsiteous} className = "websiteous" src={Websiteous} alt="Featured Project" />
             <div onClick={openWebsiteous} className='placeholder-text'> View Websiteous</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;