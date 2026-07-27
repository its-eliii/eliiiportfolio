import '../styles/About.css';
import SectionTitle from '../components/SectionTitle';
import aboutPic from '../assets/about.webp'; // reuse your hero image or add a different one

function About() {
    return (
        <section id="about" className="about">
            <SectionTitle title="About Me" />
            <div className="about-content">
                <div className="about-image">
                <img src={aboutPic} alt="Renz profile" />
                </div>
                <div className="about-text">
                <p>
                    I'm a <span className="highlight">BS in Information Technology graduate </span> 
                    (<strong>Cum Laude</strong>) and a certified 
                    <span className="highlight"> Civil Service Professional </span> 
                    with a unique blend of <strong>full-stack development skills</strong>, 
                    <strong> technical support experience</strong>, 
                    and <strong>client-facing customer service expertise</strong>.
                </p>
                <p>
                    I thrive in collaborative environments and enjoy turning 
                    <strong> complex technical requirements </strong> 
                    into clean, user-friendly solutions. 
                    My journey blends academic excellence as an 
                    <span className="highlight"> IT graduate </span> 
                    with real-world impact—bridging 
                    <strong> full-stack technical knowledge</strong>, 
                    <strong> hands-on IT support</strong>, 
                    and <strong>customer service </strong> 
                    to optimize system reliability, streamline processes, and deliver exceptional end-user support.
                </p>
                </div>
            </div>
        </section>
    );
}

export default About;
