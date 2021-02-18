
import styles from '../styles/Form.module.css'
const ContactForm = () => {
    
        return(
            <form className={styles.form} name="contact" action="/success" method="POST" data-netlify="true">
                <p >
                    <input className={styles.name} type="text" id="name" name="fname" onChange={e => setName(e.target.value)} placeholder="Name.." />
                </p>
                <p >
                    <input className={styles.email} type="text" id="email" name="email" onChange={e => setEmail(e.target.value)} placeholder="Email.." />
                </p>
                <p >
                    <textarea className={styles.message} id="message" name="message" onChange={e => setMessage(e.target.value)} placeholder="What do you want to build?"></textarea>
                </p>z
                <p >
                    <button className={styles.sendButton} type="submit">Send</button>
                </p>
            </form>
      
        )
    }


export default ContactForm;