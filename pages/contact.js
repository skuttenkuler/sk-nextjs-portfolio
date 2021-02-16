import ContactForm from "../components/ContactForm"
import HomeButton from '../components/HomeButton'

import styles from '../styles/Contact.module.css';


const Contact = () => {
   
    return(
        <>
        <HomeButton/>
            <h1 className={styles.header}>Let's build something great.</h1>
            <div className={styles.contactContainer}>
                <div className={styles.contactInfo}>
                    <h3 className={styles.name}>Sam Kuttenkuler</h3>
                    <ul id="contact-list"className={styles.socialMedia}>
                        <a href="#" className={styles.icon}>
                            <i class="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                        <a href="#" className={styles.icon}>
                            <i class="fa fa-medium" aria-hidden="true"></i>
                        </a>
                        <a href="#" className={styles.icon}>
                            <i class="fa fa-github-square" aria-hidden="true"></i>
                        </a>
                        <a href="#" className={styles.icon}>
                            <i class="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                        <a href="#" className={styles.icon}>
                            <i class="fa fa-twitch" aria-hidden="true"></i>
                        </a>
                    </ul>
                </div>
        
        
                <ContactForm className={styles.contactForm}/>
            </div>
        </>
        )
};

export default Contact;
