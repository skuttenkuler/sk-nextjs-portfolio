import React, { useState } from 'react'
import Link from 'next/link'
import styles from '../../../styles/NavLink.module.css'

const BlogLink = () => {
    const [text, setText] = useState("I");

    const blogLinkText = (text) => {
        //console.log("switched")
        setText(text);
    }
    return(
        <>
            <div className={styles.navItem}onMouseEnter={() => blogLinkText("BLOG") } onMouseLeave={() => blogLinkText("I")}>
                <Link href="/blog">{text}</Link>
            </div>
            <div className={styles.mobileHomeLink}>
                <Link href="/blog">BLOG</Link>
            </div>
        </>
    )
}
 

export default BlogLink;