import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
const Navbar = () => {
    return(
    <nav className={styles.nav}>
        <ul>
            <li className={styles.navItem}>
                <Link href="/">Home</Link>
            </li>
            <li className={styles.navItem}>
                <Link href="/about">About</Link>
            </li>
            <li className={styles.navItem}>
                <Link href="/blog">Blog</Link>
            </li>
            <li className={styles.navItem}>
                <Link href="/projects">Projects</Link>
            </li>
            <li className={styles.navItem}>
                <Link href="/resume">Resume</Link>
            </li>
            <li className={styles.navItem}>
                <Link href="/contact">Contact</Link>
            </li>
            
        </ul>
    </nav>
    )
}

export default Navbar;