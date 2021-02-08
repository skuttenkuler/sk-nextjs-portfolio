import Meta from './Meta'
import Navbar from './Navbar'
import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
    return(
    <>
    <Meta/>
    <Navbar/>
    <div className={styles.container}>
            {children}
    </div>
    </>
    )
};

export default Layout;