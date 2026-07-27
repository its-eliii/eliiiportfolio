import { useState, useEffect } from "react";
import "../styles/Navbar.css";

function Navbar() {
    const [activeSection, setActiveSection] = useState("hero");
    const [menuOpen, setMenuOpen] = useState(false);

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

                <button
                    className={`nav-toggle ${menuOpen ? 'open' : ''}`}
                    aria-label="Toggle menu"
                    onClick={() => setMenuOpen((s) => !s)}
                >
                    <span className="bar" />
                    <span className="bar" />
                    <span className="bar" />
                </button>

                <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    <button
                        className={activeSection === "hero" ? "active" : ""}
                        onClick={() => { scrollToSection("hero"); setMenuOpen(false); }}
                    >
                        Home
                    </button>
                    <button
                        className={activeSection === "projects" ? "active" : ""}
                        onClick={() => { scrollToSection("projects"); setMenuOpen(false); }}
                    >
                        Projects
                    </button>
                    <button
                        className={activeSection === "about" ? "active" : ""}
                        onClick={() => { scrollToSection("about"); setMenuOpen(false); }}
                    >
                        About
                    </button>
                    <button
                        className={activeSection === "skills" ? "active" : ""}
                        onClick={() => { scrollToSection("skills"); setMenuOpen(false); }}
                    >
                        Skills
                    </button>
                    <button
                        className={activeSection === "education" ? "active" : ""}
                        onClick={() => { scrollToSection("education"); setMenuOpen(false); }}
                    >
                        Education
                    </button>
                    <button
                        className={activeSection === "experience" ? "active" : ""}
                        onClick={() => { scrollToSection("experience"); setMenuOpen(false); }}
                    >
                        Experience
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
