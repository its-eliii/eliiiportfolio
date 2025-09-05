import { useState, useEffect } from "react";
import "../styles/Navbar.css";

function Navbar() {
    const [activeSection, setActiveSection] = useState("hero");

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        const handleScroll = () => {
        const sections = ["hero", "projects", "about", "skills", "education", "experience"];
        const scrollPos = window.scrollY + window.innerHeight / 3;

        let current = "hero";

        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) {
            const offsetTop = el.offsetTop;
            const offsetHeight = el.offsetHeight;
            if (window.scrollY >= offsetTop - offsetHeight / 3) {
                current = id;
            }
            }
        });

        setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="navbar">
            <div className="nav-container">
                <h1 className="nav-logo">Eli</h1>
                <div className="nav-links">
                    <button
                        className={activeSection === "hero" ? "active" : ""}
                        onClick={() => scrollToSection("hero")}
                    >
                        Home
                    </button>
                    <button
                        className={activeSection === "projects" ? "active" : ""}
                        onClick={() => scrollToSection("projects")}
                    >
                        Projects
                    </button>
                    <button
                        className={activeSection === "about" ? "active" : ""}
                        onClick={() => scrollToSection("about")}
                    >
                        About
                    </button>
                    <button
                        className={activeSection === "skills" ? "active" : ""}
                        onClick={() => scrollToSection("skills")}
                    >
                        Skills
                    </button>
                    <button
                        className={activeSection === "education" ? "active" : ""}
                        onClick={() => scrollToSection("education")}
                    >
                        Education
                    </button>
                    <button
                        className={activeSection === "experience" ? "active" : ""}
                        onClick={() => scrollToSection("experience")}
                    >
                        Experience
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
