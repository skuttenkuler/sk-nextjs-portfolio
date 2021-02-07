import ContactForm from "../components/ContactForm"
import styles from '../styles/Contact.module.css';


const Contact = () => {
   
    return(
        <div className={styles.contactContainer}>
            <div className={styles.contactInfo}>
                <h3>Get in touch!</h3>
                <div className={styles.socialMedia}>
                    <a href="#" className={styles.icon}>
                    <i class="fa fa-instagram-square" aria-hidden="true"></i>
                    </a>
                </div>
                <div className={styles.socialMedia}>
                    <a href="#" className={styles.icon}>
                        <i class="fa fa-medium" aria-hidden="true"></i>
                    </a>
                </div>
                <div className={styles.socialMedia}>
                    <a href="#" className={styles.icon}>
                        <i class="fa fa-github-square" aria-hidden="true"></i>
                    </a>
                </div>
                <div className={styles.socialMedia}>
                    <a href="#" className={styles.icon}>
                        <i class="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                </div>
                <div className={styles.socialMedia}>
                    <a href="#" className={styles.icon}>
                        <i class="fa fa-twitch" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        
        
        <ContactForm/>
        </div>
        )
};

export default Contact;
