import {server} from '../config'
import ProjectsList from '../components/ProjectsList'
const Projects = ({projects}) => {
    return(
        <>
        <h1>This is the Projects page</h1>
        <ProjectsList projects={projects}/>
        </>
        )
};


export const getStaticProps = async () => {
    const res = await fetch(`${server}/api/projects`)
    const projects = await res.json();
    
    //return props object
    return{
        props: {
            projects
        }
    }
}
export default Projects;