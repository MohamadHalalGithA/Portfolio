import React, { useState, useEffect, useRef } from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import '../resume.css';

const Resume = () => {
  const [activeSection, setActiveSection] = useState(0);
  const timelineRef = useRef(null);
  const sectionsRef = useRef([]);

  
  const workExperience = [
    {
  id: 'statcan',
  period: 'MAY 2026 - SEP 2026',
  company: 'Statistics Canada',
  workType: 'On-site work',
  role: 'Operator, Processing Operations and Census Help Line',
  description: [
    'Processed and validated high-volume Census 2026 data while following strict quality, confidentiality, and security procedures.',
    'Performed structured data validation, analytical review, and quality-control checks to identify incomplete, inconsistent, or inaccurate records.',
    'Investigated discrepancies and processing issues, resolved routine cases, and escalated more complex problems to the appropriate teams.',
    'Used internal systems, reference tools, and established procedures to verify information and support accurate census processing.',
    'Reviewed records for completeness and consistency and documented issues requiring further investigation or correction.',
  ],
  technologies: [
    'Data Validation',
    'Quality Control',
    'Analytical Review',
    'Issue Investigation',
    'Documentation',
    'Internal Information Systems',
    'Process Compliance',
    'Client Support'
  ]
},
    {
  id: 'webdeveloper',
  period: 'DEC 2023 - JUN 2025',
  company: 'Websiteous',
  workType: 'Hybrid work',
  role: 'Web Developer',
  description: [
    'Built and maintained responsive website pages and reusable components using Elementor, JavaScript, React, and Next.js.',
    'Worked with TypeScript, Git, and shared codebases to implement features, fix bugs, and review changes.',
    'Collaborated with designers and developers to turn requirements and mockups into working web pages and features.',
    'Improved website performance through image optimization, lazy loading, and general frontend cleanup.',
    'Updated and maintained existing client websites, including content changes, layout adjustments, and troubleshooting.'
  ],
  technologies: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Elementor', 'Git']
}
  ];

  const certificates = [
    {
      name: 'React Professional Certificate',
      issuer: 'Meta',
      date: '2023',
      description: 'Advanced React development including hooks, context, performance optimization, and modern React patterns.'
    },
    {
      name: 'Realtime Programming for the QNX Operating System',
      issuer: 'QNX',
      date: 'Ongoing',
      description: 'Learning and applying principles of real-time programming for embedded systems using the QNX operating system.'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timeline = timelineRef.current;
      const timelineRect = timeline.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress through the timeline
      const scrollProgress = Math.max(0, Math.min(1, 
        (windowHeight / 2 - timelineRect.top) / (timelineRect.height - windowHeight / 2)
      ));
      
      // Update active section based on scroll progress
      const newActiveSection = Math.min(
        workExperience.length - 1,
        Math.floor(scrollProgress * workExperience.length)
      );
      
      setActiveSection(newActiveSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [workExperience.length]);

const handleDownloadPDF = () => {
  const link = document.createElement("a");
  link.href = "/resume.pdf";      // path inside public/
  link.download = "M.Halal CV.pdf"; // the file name user sees
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  return (
    <div className="resume-page" id = 'resume'>
      {/* Header */}
      <section className="resume-header">
        <div className="container">
          <h1 className="resume-title">
           My <span className="gradient-text">Resume</span>
          </h1>
          <p className="resume-subtitle">
            A comprehensive overview of my career journey and achievements
          </p>
        </div>
      </section>

      {/* Work Experience Timeline */}
      <section className="work-timeline" ref={timelineRef}>
        <div className="container">
          <div className="timeline-container">
            {/* Timeline Line */}
            <div className="timeline-line">
              <div 
                className="timeline-progress"
                style={{
                  height: `${(activeSection + 1) / workExperience.length * 100}%`
                }}
              />
              <div 
                className="timeline-indicator"
                style={{
                  top: `${activeSection / (workExperience.length - 1) * 100}%`
                }}
              />
            </div>

            {/* Timeline Content */}
            <div className="timeline-content">
              {workExperience.map((job, index) => (
                <div
                  key={job.id}
                  ref={el => sectionsRef.current[index] = el}
                  className={`timeline-item ${index === activeSection ? 'active' : ''}`}
                >
                  <div className="timeline-left">
                    <div className="job-meta">
                      <span className="job-period">{job.period}</span>
                      <h3 className="company-name">{job.company}</h3>
                      {job.location && (
                        <p className="job-location">{job.location}</p>
                      )}
                      <span className="work-type">{job.workType}</span>
                    </div>
                  </div>

                  <div className="timeline-right">
                    <div className="job-content">
                      <h2 className="job-role">{job.role}</h2>
                      <div className="job-description">
                        {job.description.map((paragraph, idx) => (
                          <p key={idx}>{paragraph}</p>
                        ))}
                      </div>
                      <div className="job-technologies">
                        {job.technologies.map((tech, idx) => (
                          <span key={idx} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="certificates-section">
        <div className="container">
          <h2 className="section-title">
            Certificates & <span className="gradient-text">Achievements</span>
          </h2>
          
          <div className="certificates-grid">
            {certificates.map((cert, index) => (
              <div key={index} className="certificate-card">
                <h3 className="certificate-name">{cert.name}</h3>
                <p className="certificate-issuer">{cert.issuer}</p>
                <span className="certificate-date">{cert.date}</span>
                <p className="certificate-description">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="download-section">
        <div className="container">
          <div className="download-card">
            <h3 className="download-title">Download Full Resume</h3>
            <p className="download-description">
              Get a comprehensive PDF version of my resume with complete details
            </p>
            <Button 
              onClick={handleDownloadPDF}
              className=" pulse download-button"
              size="lg"
            >
              
              <Download className="mr-2" size={20} />
              Download PDF
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
