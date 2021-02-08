import React, { useState } from 'react'
import Link from 'next/link'
import styles from '../../../styles/NavLink.module.css'

const AboutLink = () => {
    let currentDT = new Date();
    const hour = currentDT.getHours();
    //set greeting
    const greeting = `Good ${(hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening'}, `;
    
    const [text, setText] = useState(greeting);

    let aboutText = (text) => {
        console.log(text)
        setText(text);
    }
    return(
  
            <div className={styles.navItem} onMouseEnter={() => aboutText("ABOUT")} 
            onMouseLeave={() => aboutText(greeting)}>
                <Link href="/about">{text}</Link>
            </div>
    )
}
 

export default AboutLink;