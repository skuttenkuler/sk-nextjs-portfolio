import {projects} from '../data/projectdata'
import {testimonials} from '../data/testimonials'
import ProjectsList from '../components/ProjectsList'
import HomeButton from '../components/HomeButton'
import Testimonials from '../components/Testimonials'

const Projects = ({projects, testimonials}) => {
    //console.log([projects,testimonials])
    return(
        <>
        <HomeButton/>
        <ProjectsList projects={projects}/>
        <Testimonials testimonials={testimonials} />
        </>
        )
};


export async function getStaticProps() {
    return { props: { projects, testimonials } }
  }

export default Projects;