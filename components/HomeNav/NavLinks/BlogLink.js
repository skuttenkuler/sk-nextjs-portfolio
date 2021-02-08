import React, { useState } from 'react'
import Link from 'next/link'
import styles from '../../../styles/NavLink.module.css'

const BlogLink = () => {
    const [text, setText] = useState("Name");

    const blogLinkText = (text) => {
        console.log("switched")
        setText(text);
    }
    return(
  
            <div className={styles.navItem}onMouseEnter={() => blogLinkText("BLOG") } onMouseLeave={() => blogLinkText("Name")}>
                <Link href="/blog">{text}</Link>
            </div>
    )
}
 

export default BlogLink;