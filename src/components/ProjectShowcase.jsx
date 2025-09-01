import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import UpLift from '../images/UpLift.png';
import OttawaR from '../images/Ottawa R.png';
import MyTravel from '../images/MyTravelPal.png';
import AdamExpress from '../images/AdamExpress.png';

const ProjectShowcase = () => {
  const [activeProject, setActiveProject] = useState(0);
  const projectRefs = useRef([]);
  const containerRef = useRef(null);

  const projects = [
    {
      id: 'UpLift',
      title: 'UpLift Gym App',
      description: 'A comprehensive platform designed to help gym enthusiasts discover workouts, track their progress, and access essential health information.',
      tags: ['React', 'Node', 'JavaScript', 'Express', 'Material UI', 'RapidAPI', 'Axios', 'CSS3', 'HTML5'],
      website: 'https://upliftgym.netlify.app/',
      github: 'https://github.com/MohamadHalalGithA/UpLift',
      image: UpLift,
      color: 'rgba(236, 72, 153, 0.1)'
    },
    {
      id: 'OttawaRenovation',
      title: 'Ottawa Renovation Contractors',
      description: 'A professional website for a renovation company in Ottawa, showcasing their services, portfolio, and customer testimonials to attract potential clients.',
      tags: ['Wordpress', 'React', 'Tailwind CSS', 'TypeScript', 'PHP', 'SQL', 'Elementor', 'MongoDB', 'Node.js', 'Express.js'],
      website: 'https://ottawarenocontractors.com/',
      github: null,
      image: OttawaR,
      color: 'rgba(59, 130, 246, 0.1)'
    },
    {
      id: 'MyTravelPal',
      title: 'MyTravelPal',
      description: 'A travel planning app that helps users discover destinations. Using a sleek interface, users can search for places, view details, and plan their trips efficiently. The app integrates with various APIs to provide a map view with location markers, making it easy to visualize travel plans.',
      tags: ['React.js', 'JavaScript', 'CSS3', 'Node.js', 'Express.js', 'RapidAPI', 'Axios'],
      website: 'https://mytravelpalre.netlify.app/',
      github: 'https://github.com/MohamadHalalGithA/MyTravelPal',
      image: MyTravel,
      color: 'rgba(16, 185, 129, 0.1)'
    },
    {
      id: 'Adam Express',
      title: 'Adam Express',
      description: 'A moving company website that showcases their services, provides a booking system, and highlights customer testimonials. The site is designed to be user-friendly and visually appealing, making it easy for potential customers to learn about the company and book their services.',
      tags: ['Wordpress', 'React.js', 'JavaScript', 'CSS3', 'HTML5', 'PHP', 'SQL', 'Elementor'],
      website: 'https://adam-express.ca/',
      github: null,
      image: AdamExpress,
      color: 'rgba(147, 51, 234, 0.1)'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerTop = containerRef.current.offsetTop;
      const containerHeight = containerRef.current.offsetHeight;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      const scrollProgress = Math.max(0, Math.min(1,
        (scrollY - containerTop + windowHeight / 2) / containerHeight
      ));
      
      const newActiveProject = Math.min(
        projects.length - 1,
        Math.floor(scrollProgress * projects.length)
      );
      
      setActiveProject(newActiveProject);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [projects.length]);

  return (
    <div>
      <div className="showcase-header">
        <p className="showcase-label">View All My</p>
        <h2 className="showcase-title">
          Technical <span className="gradient-text" id='work'>works</span>
        </h2>
      </div>

      {projects.map((project, index) => (

        <section key={project.id} className="project-showcase" ref={containerRef}>
          <div className="showcase-content">
            {/* Project Previews - Left Side */}
            <div className="project-previews">
              <div
                className={`project-preview active`}
                style={{ backgroundColor: project.color }}
              >
                <div className="project-preview-content">
                  <div className="project-preview-header">
                    <div className="browser-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="project-preview-body">
                    {/* Render image if provided, otherwise fall back to title */}
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        style={{
                          maxWidth: '100%',
                          maxHeight: '100%',
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          borderRadius: '0.75rem'
                        }}
                      />
                    ) : (
                      <div className="project-mockup">
                        {project.title}
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <div className="project-overlay">
                  <div className="overlay-buttons">
                    <a 
                      href={project.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="overlay-button website-button"
                    >
                      <ExternalLink size={20} />
                      <span>Website</span>
                    </a>
                    {project.github ? <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="overlay-button github-button"
                    >
                      <Github size={20} />
                      <span>GitHub</span>
                    </a> : ""}
                   
                  </div>
                </div>
              </div>
            </div>

            {/* Project Details - Right Side */}
            <div className="project-details">
              <div className="project-info">
                <h3 className="project-name">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                {/* Mobile/Tablet Buttons */}
                <div className="mobile-buttons">
                  <a 
                    href={project.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mobile-button website-button"
                  >
                    <ExternalLink size={18} />
                    <span>Website</span>
                  </a>
                  {
                    project.github ?
                     <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mobile-button github-button"
                  >
                    <Github size={18} />
                    <span>GitHub</span>
                  </a> : ""
                  }
                 
                </div>

                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ProjectShowcase;
