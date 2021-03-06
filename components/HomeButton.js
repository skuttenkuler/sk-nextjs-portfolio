import React, {useState} from 'react'
import Link from 'next/link'
import styles from '../styles/Button.module.css'

const HomeButton = () => {
    const [text, setText] = useState("Sam.");

    let buttonText = (text) => {
        setText(text);
    }

    return(
        <div className={styles.Button} onMouseEnter={() => buttonText("Home.")} 
        onMouseLeave={() => buttonText("Sam.")}>
            <Link href="/" >{text}</Link>
        </div>
    )
}

export default HomeButton;