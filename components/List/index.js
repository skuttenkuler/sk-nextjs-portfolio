import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Button.module.css'

const WorkLink = ({page,data}) => {
    return (
        <div className="projects">
            <Link href={`/${page}/${data.title}`}>
                <a className={styles.project}>
                    <h4 id="project-title"className={styles.projectTitle}>{data.title}</h4>
                <div className="p-details"id="project-details">
                    {page == 'projects' ?
                        <ul key={data.title} id={data.title} className={styles.techlist}>
                        {data.tech.forEach((t,i) => (
                            <li key={i} className={styles.techList}>{t}</li>
                        ))}
                        </ul>
                        :
                        null
                    }
                    <p id="proj-desc"className={styles.projectDesc}>{data.description}</p>
                </div>
                </a>
            </Link>
        </div>     
            )
    }

export const WorkList = ({page,data}) => {
    return(
            <ul className={styles.ListContainer}>
            {data.map((d) => (
                <WorkLink page={page} data={d}/>
            ))}
            </ul>
        
    )
}