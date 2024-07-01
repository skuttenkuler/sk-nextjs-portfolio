import React, {useState} from 'react';
import Link from 'next/link'
import styles from '../../styles/Nav.module.css'

const timeOfDay = () => {
    const currentDT = new Date()
    const hour = currentDT.getHours()
    const greeting = `${(hour < 12 && 'MORNING,') || (hour < 17 && 'AFTERNOON,') || 'EVENING,'}`
    return greeting.toUpperCase()
}
const prepText = (greeting) => {
    const initNavText = greeting.split(/[ ,]+/)
    initNavText[1] = timeOfDay()
    return initNavText
}

const NavLink = ({initText,page}) => {
    const [text, setText] = useState(initText)
    return(
        <>
            <div className={styles.navItem} onMouseEnter={() => setText(page)} onMouseLeave={() => setText(initText)}>
                <Link href={`/${page}`}>{text.toUpperCase()}</Link>
            </div>
            <div className={styles.mobileHomeLink}>
                <Link href={`/${page}`}>{page.toUpperCase()}</Link>
            </div>
        </>
    )
}

export const NavMain = () => {
    const pages = ["about","career","projects","skills","blog","contact"]
    const greeting = "Good afteroon welcome to my page."
    const text = prepText(greeting)
        return (
        <div className={styles.navContainer}>
            {pages.map((page, index) => {
              return <NavLink initText={text[index]} page={page}/>
             })}
         </div>
        )
    
}

export const PrevButton = ({prev, page}) => {
    const [text, setText] = useState(page);
    return(
        <div className={styles.Button} onMouseEnter={() => setText(page)} 
        onMouseLeave={() => setText(prev)}>
            <Link href={`/${prev}`} >{text}</Link>
        </div>
    )
}
