import React, {useState} from 'react'
import Link from 'next/link'
import styles from '../styles/Button.module.css'

const ProjectsButton = () => {
    const [text, setText] = useState("Sam.");

    let buttonText = (text) => {
        setText(text);
    }

    return(
        <div className={styles.Button} onMouseEnter={() => buttonText("Projects.")} 
        onMouseLeave={() => buttonText("Sam.")}>
            <Link href="/projects" >{text}</Link>
        </div>
    )
}

export default ProjectsButton;