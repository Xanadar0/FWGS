import styles from './Projects.module.css';

export default function ProjectCard({ project }) {
  return (
    <div className={styles.card}>
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      {(project.github || project.moddb) && (
        <div className={styles.links}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
          )}
          {project.moddb && (
            <a href={project.moddb} target="_blank" rel="noreferrer">ModDB</a>
          )}
        </div>
      )}
    </div>
  );
}
