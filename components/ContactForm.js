import styles from '../styles/Form.module.css'
const ContactForm = () => {
    return(
    <>
        <form className={styles.form}name="contact" method="POST" data-netlify="true">
            <p >
                <input className={styles.name} type="text" id="name" name="name" placeholder="Name.." />
            </p>
            <p >
                <input className={styles.email} type="text" id="email" name="email" placeholder="Email.." />
            </p>
            <p >
                <textarea className={styles.message} id="message" name="message" placeholder="What do you want to build?"></textarea>
            </p>
            <p >
                <button className={styles.sendButton} type="submit">Send</button>
            </p>
        </form>
  </>
    )
}

export default ContactForm;