import styles from "./contactform.module.css"

export default function ContactForm() {
  return (
    <section className={styles.contactFormSection}>
        <div className={`center ${styles.contactFormWrapper}`}>
        <h3 className={styles.contactFormTitle}>Contact Form</h3>
            <form method="POST" action="https://formsubmit.co/7a42c42083428f22fb9adf5938b844de " className={styles.contactForm}>
                <label htmlFor="nameInput">Name</label>
                <input required className={styles.nameInput} type="text" name="name" id="nameInput" />

                <label htmlFor="emailInput">Email</label>
                <input required className={styles.emailInput} type="email" name="email" id="emailInput" />

                <label htmlFor="messageInput">Message</label>
                <textarea required rows={3} className={styles.messageInput} name="message" id="messageInput"></textarea>

                <div className="center">
                    <input className={styles.submitButton} type="submit" value="Send Message" />
                </div>

                <input type="hidden" name="_next" value="https://cartersvilleoutreachinternational.org/contact?messagesuccess=true" />
                <input type="hidden" name="_template" value="table" />
            </form>
        </div>
    </section>
  )
}
