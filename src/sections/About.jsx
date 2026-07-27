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
                    I'm a <span className="highlight">BS in Information Technology graduate</span> 
                    (<strong>Cum Laude</strong>) and a certified 
                    <span className="highlight">Civil Service Professional</span> 
                    with a unique blend of <span className="highlight">full-stack development skills</span>, 
                    <span className="highlight">technical support experience</span>, 
                    and <span className="highlight">client-facing customer service expertise</span>.
                </p>
                <p>
                    I thrive in collaborative environments and enjoy turning 
                    <span className="highlight">complex technical requirements</span> 
                    into clean, user-friendly solutions. 
                    My journey blends academic excellence as a 
                    <span className="highlight">Cum Laude IT graduate</span> 
                    with real-world impact—bridging 
                    <span className="highlight">full-stack technical knowledge</span>, 
                    <span className="highlight">hands-on IT support</span>, 
                    and <span className="highlight">customer service</span> 
                    to optimize system reliability, streamline processes, and deliver exceptional end-user support.
                </p>
                </div>
            </div>
        </section>
    );
}

export default About;
