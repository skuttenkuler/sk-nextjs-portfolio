import {server} from '../config'
import ProjectsList from '../components/ProjectsList'
import HomeButton from '../components/HomeButton'
import Testimonials from '../components/Testimonials'

const Projects = ({projects, testimonials}) => {
    return(
        <>
        <HomeButton/>
        <Testimonials testimonials={testimonials} />
        <ProjectsList projects={projects}/>
        </>
        )
};


export const getStaticProps = async () => {
    const [projects, testimonials] = await Promise.all([
        fetch(`${server}/api/projects`).then(r => r.json()),
        fetch(`${server}/api/testimonials`).then(r => r.json())
      ]);
    
    //return props object
    return{
        props: {
            projects,
            testimonials
        }
    }
}

export default Projects;