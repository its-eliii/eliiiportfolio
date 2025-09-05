import '../styles/Projects.css';
import SectionTitle from '../components/SectionTitle';
import { projects } from '../data/data';

function Projects() {
  return (
    <section id="projects" className="projects">
      <SectionTitle title="Projects" />
      <div className="project-grid">
        {projects.map((proj, i) => (
          <div key={i} className="project-card">
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <p><strong>Tech:</strong> {proj.tech.join(', ')}</p>
            <a href={proj.link} target="_blank">View on GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;