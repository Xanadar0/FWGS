import styles from './Projects.module.css';
import ProjectCard from './ProjectCard';
import LoadMoreButton from './LoadMoreButton';
import { useVisibleProjects } from '/src/hooks/useVisibleProjects';

export default function Projects() {
  const { visibleProjects, isAllVisible, handleToggleProjects } = useVisibleProjects();

  return (
    <section data-aos="fade-up">
    <div className="container">
      <section  className={styles.projectsSection}>
        <h2 id="projects" className="secondTitle">Our Projects</h2>

        <div className={styles.grid}>
          {visibleProjects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>

        <LoadMoreButton isAllVisible={isAllVisible} onClick={handleToggleProjects} />
      </section>
      </div>
    </section>
  );
}
