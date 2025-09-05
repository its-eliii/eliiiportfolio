// Experience.jsx
import '../styles/Experience.css';
import SectionTitle from '../components/SectionTitle';
import { experience } from '../data/data';
import { Briefcase, Code, Laptop } from "lucide-react"; // you can swap icons

function Experience() {
  const icons = [<Briefcase />, <Code />, <Laptop />]; // pick per exp

  return (
    <section id="experience" className="experience">
      <SectionTitle title="Experience" />

      <div className="exp-grid">
        {experience.map((exp, i) => (
          <div key={i} className="exp-card">
            <div className="exp-icon">{icons[i % icons.length]}</div>
            <h3>{exp.role}</h3>
            <p className="exp-company">{exp.company}</p>
            <span className="exp-duration">{exp.duration}</span>
            <ul>
              {exp.tasks.map((task, j) => (
                <li key={j}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
