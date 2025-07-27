import styles from './Projects.module.css';
import ProjectCard from './ProjectCard';
import LoadMoreButton from './LoadMoreButton';
import { useVisibleProjects } from '/src/hooks/useVisibleProjects';

export default function Projects() {
  const { visibleProjects, isAllVisible, handleToggleProjects } = useVisibleProjects();

  return (
    <div className="container">
      <section id="projects" className={styles.projectsSection}>
        <h2 className="secondTitle">Our Projects</h2>

        <div className={styles.grid}>
          {visibleProjects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>

        <LoadMoreButton isAllVisible={isAllVisible} onClick={handleToggleProjects} />
      </section>
    </div>
  );
}
