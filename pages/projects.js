import {projects} from '../data/data'
import {PrevButton,WorkList} from '../components/'

const Projects = ({projects}) => {
    return(
        <>
        <PrevButton prev="" page="Home."/>
        <WorkList page="projects" data={projects}/>
        </>
        )
};


export async function getStaticProps() {
    return { props: { projects } }
  }

export default Projects;