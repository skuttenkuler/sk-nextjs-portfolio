import React, { useState } from 'react'
import Link from 'next/link'
import styles from '../../../styles/NavLink.module.css'

const ResumeLink = () => {
    const [text, setText] = useState("Sam");

    const resumeLinkText = (text) => {
        console.log("switched")
        setText(text);
    }
    return(
  
            <div className={styles.navItem}onMouseEnter={() => resumeLinkText("RESUME") } onMouseLeave={() => resumeLinkText("Sam")}>
                <Link href="/blog">{text}</Link>
            </div>
    )
}
 

export default ResumeLink;