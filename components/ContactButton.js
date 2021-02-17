import React, {useState} from 'react'
import Link from 'next/link'
import styles from '../styles/Button.module.css'

const ContactButton = () => {
    const [text, setText] = useState("Sam.");

    let buttonText = (text) => {
        setText(text);
    }

    return(
        <div className={styles.Button} onMouseEnter={() => buttonText("Contact.")} 
        onMouseLeave={() => buttonText("Sam.")}>
            <Link href="/contact" >{text}</Link>
        </div>
    )
}

export default ContactButton;