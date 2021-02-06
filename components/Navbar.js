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
            
        </ul>
    </nav>
    )
}

export default Navbar;