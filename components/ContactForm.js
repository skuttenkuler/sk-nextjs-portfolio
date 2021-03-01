import React, {useState} from "react"
import { useRouter } from 'next/router'
import axios from 'axios'
import styles from '../styles/Form.module.css'

const ContactForm = () => {
    const URL = process.env.SESURL
    const router = useRouter()
    const [contactInputs, setContactInputs] = useState({ name: '', 
                                                         email: '', 
                                                         message: ''
    });

    const handleChange = (e) => {
        setContactInputs({...contactInputs, [e.target.name]: e.target.value})
    };

    const handleSubmit = (e) =>  {
        e.preventDefault()
        router.push("/success")
        console.log(contactInputs)
        axios.post(URL, contactInputs, {
            dataType: "json",
            crossDomain: "true",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(contactInputs),
        })
        .then(function(response) {
            console.log(response.data);
            
          })
          .catch(function(error) {
            console.log(error);
        })
    }
    
        return(
            <form className={styles.form} onSubmit={handleSubmit} name="contact" href="/success" method="POST">
                <p>
                    <input className={styles.name} type="text" id="name" name="name" value={contactInputs.name} placeholder="Name.." onChange={handleChange} required/>
                </p>
                <p>
                    <input className={styles.email} type="text" id="email" name="email" value={contactInputs.email} placeholder="Email.." onChange={handleChange} required/>
                </p>
                <p>
                    <textarea className={styles.message} id="message" name="message" value={contactInputs.message} placeholder="What do you want to build?" onChange={handleChange} required></textarea>
                </p>
                <p>
                    <button className={styles.sendButton}>Send</button>
                </p>
            </form>
      
        )
    }
export default ContactForm;