import React, { useState } from 'react'
import Link from 'next/link'
import styles from '../../../styles/NavLink.module.css'

const ContactLink = () => {
    const [text, setText] = useState("AM");

    const contactLinkText = (text) => {
        //console.log("switched")
        setText(text);
    }
    return(
        <>
            <div className={styles.navItem}  onMouseEnter={() => contactLinkText("CONTACT") } onMouseLeave={() => contactLinkText("AM")}>
                <Link href="/contact">{text}</Link>
            </div>
            <div className={styles.mobileHomeLink}>
                <Link href="/contact">CONTACT</Link>
            </div>
        </>
    )
}
 

export default ContactLink;