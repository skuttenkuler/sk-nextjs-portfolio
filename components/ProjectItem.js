import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {SiReact,
    SiTypescript,
    SiRedux,
    FaNodeJs,
    SiFirebase,
    SiDjango,
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiUnity,
    SiMongodb,} from 'react-icons/si';
import styles from '../styles/ProjectsList.module.css'

const ProjectItem = ({project, object_key}) => {

    return (
        <Link href={project.deployed} passHref={true}>
            <a className={styles.card}>
                <h3 key={object_key}>{project.title} &rarr;</h3>
                <div className={styles.projectContainer}>
                   <div>
                   {project.tech.map((t, i) => ( 
                    <div key={i}>
                        {React.createElement(t.icon)}
                        
                    </div>
                    ))}
                    </div>
                <Image src={project.thumbnail}
                  alt="project image"
                  height={500}
                  width={500}
                    />
                </div>
            </a>
        </Link>
    )
}

export default ProjectItem;