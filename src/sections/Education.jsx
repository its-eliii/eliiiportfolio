// src/sections/Education.jsx
import '../styles/Education.css';
import SectionTitle from '../components/SectionTitle';
import { FaGraduationCap, FaAward, FaCalendarAlt, FaMedal, FaUniversity } from "react-icons/fa";

function Education() {
    return (
        <section id="education" className="education">
        <SectionTitle title="Education" />
            
            <div className="edu-timeline">
                <div class="edu-item">
                    <div class="edu-dot"></div>
                    <div class="edu-content">
                        <h3><FaUniversity className="edu-icon"/> Systems Plus Computer College</h3>
                        <p className="edu-degree"><FaGraduationCap /> General Academic Strand (GAS)</p>
                        <p><FaCalendarAlt /> June 2019 – June 2021</p>
                        <div class="edu-badges">
                            <span class="badge"><FaMedal /> With Honors</span>
                        </div>
                    </div>
                </div>

                <div className="edu-item">
                    <div className="edu-dot"></div>
                    <div className="edu-content">
                        <h3><FaUniversity className="edu-icon"/> Systems Plus Computer College</h3>
                        <p className="edu-degree"><FaGraduationCap /> Bachelor of Science in Information Technology (BSIT)</p>
                        <p><FaCalendarAlt /> July 2021 – June 2025</p>
                        
                        <div className="edu-badges">
                            <span className="badge"><FaMedal /> Cum Laude</span>
                            <span className="badge"><FaMedal /> Dean’s Lister (2021–2024)</span>
                            <span className="badge"><FaAward /> Service Oriented Award</span>
                            <span className="badge"><FaAward /> Loyalty Award</span>
                        </div>
                        <p className="edu-extra">🎓 GWA: 1.33 | 📌 QCYDO Economic Scholar</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;
