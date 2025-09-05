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
                    I'm a <span className="highlight">BS in Information Technology graduate</span>, 
                    <strong> cum laude</strong>, with hands-on experience in 
                    <span className="highlight"> technical support</span>, 
                    <span className="highlight"> multimedia production</span>, 
                    and <span className="highlight"> web development</span>. 
                </p>
                <p>
                    I thrive in collaborative environments and enjoy turning 
                    <em>complex requirements</em> into clean, user-friendly solutions. 
                    My journey blends academic excellence with real-world impact — 
                    from <strong>student leadership</strong> to 
                    <strong> full-stack development</strong>.
                </p>
                </div>
            </div>
        </section>
    );
}

export default About;
