import React, { useState } from 'react'
import Link from 'next/link'
import styles from '../../../styles/NavLink.module.css'

const ProjectsLink = () => {
    let currentDT = new Date();
    const hour = currentDT.getHours();
    //set greeting
    const greeting = `${(hour < 12 && 'MORNING') || (hour < 17 && 'AFTERNOON') || 'EVENING'}. `;
    
    const [text, setText] = useState(greeting);

    let aboutText = (text) => {
       // console.log(text)
        setText(text);
    }
    return(
  
            <div className={styles.navItem} onMouseEnter={() => aboutText("PROJECTS")} onMouseLeave={() => aboutText(greeting)}>
                <Link href="/projects">{text}</Link>
            </div>
    )
}
 

export default ProjectsLink;