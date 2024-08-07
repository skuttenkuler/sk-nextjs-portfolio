import React from 'react'
import HomeButton from '../components/HomeButton'
import styles from '../styles/Resume.module.css'

const Resume = () => {
   
    
    return(
        <>
        <HomeButton/>
        <div className={styles.res}>
            <div id="resumelink"className={styles.resumeLink}>
                <h3 className={styles.materialTitle}>Resume.</h3>
            <a id="download_link"className={styles.links} href="/static/Resume_SamKuttenkuler.pdf"download >Download.</a>
            </div>
        </div>
        <h2 className={styles.certHeader}>Certificates.</h2>
        <ul className={styles.certList}>
            <div id="resumelink"className={styles.resumeLink}>
                <h3 className={styles.materialTitle}>UC Berkeley</h3>
                <p className={styles.description}>Full Stack Web Developer</p>
            <a className={styles.links} href="/static/Berkley_Certificate.pdf">View.</a>
            </div>
            <div id="resumelink"className={styles.resumeLink}>
                <h3 className={styles.materialTitle}>Stanford University</h3>
                <p className={styles.description}>Machine Learning</p>
            <a className={styles.links} href="/static/MLCertificate.pdf">View.</a>
            </div>
        </ul>
         </>
        )
};

export default Resume;