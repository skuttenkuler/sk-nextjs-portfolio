import {server} from '../../../config/index'
import Meta from '../../../components/Meta'
import ProjectsButton from '../../../components/ProjectsButton'
import styles from '../../../styles/Project.module.css'
import Image from 'next/image'
import Link from 'next/link'

const project = ({project}) => {
    return(
        <>
        <ProjectsButton/>
        <Meta title={project.title} description={project.description}/>
        <div className={styles.projectContainer}>
            <div className={styles.projectImage}>
                {project.deployed ? 
                    <Link href={project.deployed}>
                        <a>
                            <Image
                                src={project.thumbnail}
                                alt={project.title}
                                width={1000}
                                height={571}
                            />
                        </a>
                    </Link>
                :
                <Link href={project.code}>
                        <a>
                            <Image
                                src={project.thumbnail}
                                alt={project.title}
                                width={1000}
                                height={571}
                            />
                        </a>
                    </Link>
                }
            </div>
            <div className={styles.projectDetails}>
                <h1 className={styles.title}>{project.title}</h1>
                <ul id="tech-list"className={styles.techlist}>
                    {project.tech.map((t,i) => (
                        <li key={i} >{t}</li>
                    ))}
                </ul>
                <p className={styles.description}>{project.description}</p>
                <ul className={styles.links}>
                    <Link className={styles.github}href={project.code}>
                        <a id="icon">
                            <i className="fa fa-github"></i>
                        </a>
                    </Link>
                    {project.deployed ? 
                        <Link className={styles.link}href={project.deployed}>
                            <a id="icon">
                                <i className="fa fa-link"></i>
                            </a>
                        </Link> 
                        :
                        <></>
                    }
                </ul>
                
            </div>
        </div>
    </>
   

    )
}
//get props
export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/projects/${context.params.id}`)
  
    const project = await res.json()
    return {
      props: {
        project,
      },
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