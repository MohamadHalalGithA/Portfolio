
import '../footer.css';




const Footer = () => {
  

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Works', href: '#work' },
    { label: 'Resume', href: '#resume' }
  ];

  return (
    <footer className="footer">
      {/* Main Footer Content */}
      <div className="footer-container">
        {/* Header Section */}
        <div className="footer-header">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <div className="nav-logo">MH</div>
              </div>
              <div className="footer-brand-text">
                <h2>Mohamad Halal</h2>
                <p>Technical Portfolio</p>
              </div>
            </div>
          </div>
          
          {/* Social Media Icons */}
         
        </div>

        {/* Content Grid */}
        <div className="footer-content">
          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empty Column for spacing */}
          <div className="footer-spacer"></div>

          {/* Contact Us */}
          <div className="footer-section">
            <h3>Contact Me</h3>
            <div className="footer-contact">
              
              <div className="footer-contact-item">
                <div className="footer-contact-icon">☏</div>
                <span className="footer-contact-text">+1 343-558-8759</span>
              </div>
              
              <div className="footer-contact-item">
                <div className="footer-contact-icon">✉</div>
                <span className="footer-contact-text">mohamadhalal20@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
         
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© 2025. All rights reserved.</p>
          <p>Mohamad Halal Technical Portfolio</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;