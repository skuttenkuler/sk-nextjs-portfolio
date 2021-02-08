import Link from 'next/link'
import styles from '../styles/HomeButton.module.css'

const HomeButton = () => {
    return(
        <div className={styles.homeButton}>
            <Link href="/">Sam.</Link>
        </div>
    )
}

export default HomeButton;