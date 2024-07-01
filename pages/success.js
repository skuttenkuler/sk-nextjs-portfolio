import styles from '../styles/Success.module.css'
import ContactButton from '../components/Contact/ContactButton'

export default function Success() {
    return (
      <>
        <ContactButton/>
            <div className={styles.success}>
                <div>
                  <i id="letter" class="fa fa-envelope"></i>
                </div>
                <h1 className={styles.header}>Thank you! We'll be in touch soon.</h1>
            </div>
      </>
    )
  }