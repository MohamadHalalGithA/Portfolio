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
      id: 'Websiteous',
      period: 'JAN 2025 - PRESENT',
      company: 'Websiteous',
      location: 'Ottawa, ON',
      workType: 'Remote work',
      role: 'Frontend Web Developer',
      description: [
        'Architected enterprise-scale, CMS-driven reusable pagebuilder blocks with dynamic configurability using Elementor, enabling non-technical teams to manage content across 6+ production websites. Designed custom schemas and optimized GROQ queries, resulting in 40% faster content delivery.',
        'Delivered high-performance web applications using Next.js, React, and Tailwind CSS with advanced rendering strategies (SSG/SSR), achieving 25% increase in user engagement and 20% improvement in Core Web Vitals.',
        'Implemented TypeScript across full-stack codebases, reducing production defects by 15% and establishing type-safe development standards for enhanced code quality and maintainability.',
        'Enhanced team productivity via a scalable Monorepo architecture (Turborepo) and rigorous peer code reviews, contributing 40+ hours weekly while maintaining high engineering standards.',
        'Collaborated with cross-functional teams (Design, Product) to ship WCAG 2.1 AA-compliant, user-centered interfaces using Agile methodologies, managing sprints in Linear and coordinating communication via Slack.',
        'Optimized performance and SEO by implementing lazy loading, strategic code splitting, and adhering to SEO best practices, resulting in higher search rankings and better UX metrics.'
      ],
      technologies: ['Wordpress', 'PHP', 'TypeScript', 'Node', 'React', 'Tailwind CSS', 'Next.js', 'Elementor', 'GROQ', 'Slack']
    },
    {
      id: 'code',
      period: 'SEP 2022 - FEB 2023',
      company: 'Coder Sports Academy',
      workType: 'Remote work',
      role: 'Coder Coach',
      description: [
        'Mentored many students in Python and Java programming, fostering problem-solving skills and coding best practices through personalized guidance and project-based learning.',
        'Created project templates and coding exercises to enhance student engagement and practical understanding of programming concepts, leading to improved learning outcomes.',
        'Provided constructive feedback on code quality, design patterns, and algorithm efficiency, helping students refine their coding skills and prepare for technical interviews.',
        'Facilitated virtual coding workshops and Q&A sessions, promoting a collaborative learning environment and encouraging peer-to-peer support among students.'
      ],
      technologies: ['Python', 'Java', 'JavaScript', 'OOP', 'Github']
    }
  ];

  const certificates = [
    {
      name: 'AWS Certified Developer Associate',
      issuer: 'Amazon Web Services',
      date: '2024',
      description: 'Comprehensive certification covering AWS services, serverless architecture, and cloud development best practices.'
    },
    {
      name: 'React Professional Certificate',
      issuer: 'Meta',
      date: '2023',
      description: 'Advanced React development including hooks, context, performance optimization, and modern React patterns.'
    },
    {
      name: 'TypeScript Fundamentals',
      issuer: 'Microsoft',
      date: '2023',
      description: 'Type safety, advanced types, generics, and TypeScript integration with modern frameworks.'
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