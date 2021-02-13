import ProjectLink from './ProjectLink'
import styles from '../styles/ProjectsList.module.css'

const ProjectList = ({projects}) => {
    return(
        <ul>
         {projects.map((project) => (
            <ProjectLink project={project} />
        ))}
        </ul>
    )
}

export default ProjectList;