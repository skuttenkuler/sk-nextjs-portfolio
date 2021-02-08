import AboutLink from './NavLinks/AboutLink'
import BlogLink from './NavLinks/BlogLink'
import ContactLink from './NavLinks/ContactLink'
import ProjectsLink from './NavLinks/ProjectsLink'
import ResumeLink from './NavLinks/ResumeLink'

import styles from '../../styles/HomeNav.module.css'


const HomeNav = () => {
    return(
    <div className={styles.navContainer}>
            <AboutLink/>
            <ProjectsLink/>
            <BlogLink/>
            <ContactLink/>
            <ResumeLink/>
    </div>
    )
}
 

export default HomeNav;