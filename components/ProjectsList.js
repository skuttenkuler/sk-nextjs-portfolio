import ProjectItem from './ProjectItem'
import styles from '../styles/ProjectsList.module.css'

const ProjectList = ({projects}) => {

    //console.log(projects)
    return(
        <div className={styles.grid}>
            {projects.map((project, object_key) => (
                <ProjectItem project={project} key={object_key}/>
            ))} 
        </div>
    )
}

export default ProjectList;