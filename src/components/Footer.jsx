import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import '../styles/Footer.css';

function Footer() {
  return (
    <footer id="contact" className="footer">
      <p className="footer-text">© {new Date().getFullYear()} Eli | Code. Create. Repeat.</p>
      
      <div className="footer-links">
        <a href="https://github.com/its-eliii" target="_blank" rel="noopener noreferrer">
          <FaGithub /> <span>GitHub</span>
        </a>
        <a href="https://linkedin.com/in/eliiidudeee" target="_blank" rel="noopener noreferrer">
          <FaLinkedin /> <span>LinkedIn</span>
        </a>
        <a href="mailto:renzelirey10@gmail.com">
          <FaEnvelope /> <span>Email</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
