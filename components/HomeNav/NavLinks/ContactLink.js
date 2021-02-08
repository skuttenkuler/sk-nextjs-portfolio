import React, { useState } from 'react'
import Link from 'next/link'
import styles from '../../../styles/NavLink.module.css'

const ContactLink = () => {
    const [text, setText] = useState("Is");

    const contactLinkText = (text) => {
        console.log("switched")
        setText(text);
    }
    return(
  
            <div className={styles.navItem}  onMouseEnter={() => contactLinkText("CONTACT") } onMouseLeave={() => contactLinkText("Is")}>
                <Link href="/contact">{text}</Link>
            </div>
    )
}
 

export default ContactLink;