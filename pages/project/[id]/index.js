import {server} from '../../../config/index'
import Link from 'next/link'
import Image from 'next/image'
import Meta from '../../../components/Meta'
import ProjectsButton from '../../../components/ProjectsButton'
const project = ({project}) => {
    return(
        <>
        <ProjectsButton/>
        <Meta title={project.title} description={project.description}/>
        <h1>{project.title}</h1>
        
        </>

    )
}
//get props
export const getStaticProps = async (context) =>{
    const res = await fetch(`${server}/api/projects/${context.params.id}`)

    const project = await res.json()

    return {
        props: {
            project,
        }
    }
}
//get paths
export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/projects`)
    const projects = await res.json()
    const ids = projects.map((project) => project.id)
    const paths = ids.map((id) => ({params: {id: id.toString()}}))
    return {
        paths,
        fallback:false,
    }
}

export default project;