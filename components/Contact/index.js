import React, {useState} from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import styles from '../../styles/Form.module.css'

export const ContactForm = () => {
    const URL = process.env.NEXT_PUBLIC_SES_URL
    const router = useRouter()
    const [contactInputs, setContactInputs] = useState({ name: '', 
                                                         email: '', 
                                                         message: ''
    });

    const handleChange = (e) => {
        setContactInputs({...contactInputs, [e.target.name]: e.target.value})
    };

    async function handleSubmit(e) {
        e.preventDefault()
        
        const data = JSON.stringify(contactInputs)
        await axios.post(URL, data, {
            dataType: "json",
            crossDomain: "true",
            contentType: "application/json; charset=utf-8",
            data: data,
        })
        .then(function(response) {
            router.push("/success")
            console.log(response.statusText, response.status,response.data);
            
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