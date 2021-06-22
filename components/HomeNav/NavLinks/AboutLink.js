import React, { useState } from 'react'
import Link from 'next/link'
import styles from '../../../styles/NavLink.module.css'

const AboutLink = () => {
   
    const [text, setText] = useState("GOOD");

    let aboutText = (text) => {
        setText(text);
    }
    return(
        <>
            <div className={styles.navItem} onMouseEnter={() => aboutText("ABOUT")} 
            onMouseLeave={() => aboutText("GOOD")}>
                <Link href="/about">{text}</Link>
            </div>
            <div className={styles.mobileHomeLink}>
                <Link href="/about">ABOUT</Link>
            </div>
        </>
    )
}
 

export default AboutLink;