
import Link from 'next/link'
import styles from '../styles/ProjectsList.module.css'


const ProjectLink = ({project}) => {

    return (
        <div className="projects">
            <Link href={`/project/${project.id}`}>
                <a className={styles.project}>
                    <h4 id="project-title"className={styles.projectTitle}>{project.title}</h4>
                <div className="p-details"id="project-details">
                    <ul key={project.id} id={project.id} className={styles.techlist}>
                    {project.tech.map((t,i) => (
                        <li key={i} className={styles.techList}>{t}</li>
                    ))}
                    </ul>
                    <p id="proj-desc"className={styles.projectDesc}>{project.description}</p>
                </div>
                </a>
            </Link>
        </div>     
            )
    }

export default ProjectLink;