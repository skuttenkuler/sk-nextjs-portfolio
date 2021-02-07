
const ContactForm = () => {
    return(
    <>
        <form name="contact" method="POST" data-netlify="true">
            <p>
                <label for="name">Name</label>
                <input type="text" id="name" name="name" />
            </p>
            <p>
                <label for="email">Email</label>
                <input type="text" id="email" name="email" />
            </p>
            <p>
                <label for="message">Message</label>
                <textarea id="message" name="message"></textarea>
            </p>
            <p>
                <button type="submit">Send</button>
            </p>
        </form>
  </>
    )
}

export default ContactForm;