import "../styles/Hero.css";
import profilePic from "../assets/profile.jpg"; // 👈 place your image in src/assets

function Hero() {

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="hero" className="hero">
        <div className="hero-content">
            <div className="hero-text">
            <h1>
                Hi, I&apos;m <span className="highlight">Eli    </span>
            </h1>
            <h2 className="subtitle">IT Specialist | Web Developer</h2>
            <p>
                I bridge the gap between reliable IT operations and modern web development. 
                From troubleshooting systems to building responsive software solutions, 
                I turn technical challenges into seamless digital experiences.
            </p>
            <div className="cta-group">
                <a href="#projects" className="cta primary">
                View My Work
                </a>
                <a href="./files/CV-REY_RENZELI.pdf" download className="cta secondary">
                Download CV
                </a>
            </div>
            </div>

            <div className="hero-image">
            <img src={profilePic} alt="Renz" />
            </div>
        </div>

        <div className="scroll-down" onClick={() => scrollToSection("projects")}></div>
        </section>
    );
}

export default Hero;
