import React, { useState } from 'react'
import Link from 'next/link'
import styles from '../../../styles/NavLink.module.css'

const ProjectsLink = () => {
    const [text, setText] = useState("My");

    const projectsLinkText = (text) => {
        console.log("switched")
        setText(text);
    }
    return(
  
            <div className={styles.navItem} onMouseEnter={() => projectsLinkText("PROJECTS") } onMouseLeave={() => projectsLinkText("My")}>
                <Link href="/projects">{text}</Link>
            </div>
    )
}
 

export default ProjectsLink;