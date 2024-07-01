
import {ContactForm,PrevButton} from '../components/'

import styles from '../styles/Contact.module.css';


const Contact = () => {
   
    return(
        <>
        <PrevButton prev="" page="Home."/>
            <h1 className={styles.header}>Let's build something great.</h1>
            <div className={styles.contactContainer}>
                <div className={styles.contactInfo}>
                    <h3 className={styles.name}>Sam Kuttenkuler</h3>
                    <ul id="contact-list"className={styles.socialMedia}>
                        <a href="//www.instagram.com/kootkoot/" className={styles.icon}>
                            <i className="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                        <a href="//sam-kuttenk.medium.com/" className={styles.icon}>
                            <i className="fa fa-medium" aria-hidden="true"></i>
                        </a>
                        <a href="//github.com/skuttenkuler" className={styles.icon}>
                            <i className="fa fa-github-square" aria-hidden="true"></i>
                        </a>
                        <a href="//www.linkedin.com/in/skuttenkuler/" className={styles.icon}>
                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                        <a href="//www.twitch.tv/kootlicious" className={styles.icon}>
                            <i className="fa fa-twitch" aria-hidden="true"></i>
                        </a>
                    </ul>
                </div>
        
        
                <ContactForm className={styles.contactForm}/>
            </div>
        </>
        )
};

export default Contact;
