import React, {useState} from 'react'
import HomeButton from '../components/HomeButton'
import styles from '../styles/Resume.module.css'

const Resume = () => {
    const [resume, setResume] = useState("")
    const [bcert, setBCert] = useState("")
    const [scert, setSCert] = useState("")
    const setResLink = (resume) => {
        setResume(resume)
    } 
    const setBCertLink = (bcert) => {
        setBCert(bcert)
    }
    const setSCertLink = (scert) => {
        setSCert(scert)
    }
    
    return(
        <>
        <HomeButton/>
        <ul className={styles.resCertList}>
            <div id="resumelink"className={styles.resumeLink}>
                <h3 className={styles.materialTitle}>Resume.</h3>
            <a className={styles.links} href="/images/Resume_SamKuttenkuler.pdf"download >Download.</a>
            </div>
            <div id="resumelink"className={styles.resumeLink}>
                <h3 className={styles.materialTitle}>UC Berkeley</h3>
                <p className={styles.description}>Full Stack Web Developer</p>
            <a className={styles.links} href="/images/Berkley_Certificate.pdf">View.</a>
            </div>
            <div id="resumelink"className={styles.resumeLink}>
                <h3 className={styles.materialTitle}>Stanford University</h3>
                <p className={styles.description}>Machine Learning</p>
            <a className={styles.links} href="/images/MLCertificate.pdf">View.</a>
            </div>
        </ul>
         </>
        )
};

export default Resume;