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
            <h2 className="subtitle">Full-Stack Web Developer</h2>
            <p>
                I build modern, responsive, and user-friendly web applications with
                precision and creativity. Turning ideas into digital experiences is
                what I love to do.
            </p>
            <div className="cta-group">
                <a href="#projects" className="cta primary">
                View My Work
                </a>
                <a href="./files/CV_REY-RENZ-ELI.pdf" download className="cta secondary">
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
