import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/ProjectsList.module.css'

const ProjectLink = ({project}) => {

    return (
            <Link href={`/project/${project.id}`}>
                <a>
                    <h4 className={styles.projectTitle}>{project.title}</h4>
                    <br/>
                    <p className={styles.projectDesc}>{project.description}</p>
                </a>
            </Link>
                    
            )
    }

export default ProjectLink;