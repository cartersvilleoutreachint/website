import styles from "./contactmethods.module.css"

export default function ContactMethods() {
  return (
    <section className={styles.contactMethods}>
        <a href="tel:+17069811197" className={styles.contactMethod}>
            <img className={styles.contactMethodImg} src="/img/phone-icon.svg" alt="Phone Icon" />
            <div className={styles.contactMethodText}>(706) 291-1197</div>
        </a>
        <a href="mail:cartesvilleoutreachint@gmail.com" className={styles.contactMethod}>
            <img className={styles.contactMethodImg} src="/img/email-icon.svg" alt="Email Icon" />
            <div className={styles.contactMethodText}>cartesvilleoutreachint@gmail.com</div>
        </a>
        <a target="_blank" href="https://goo.gl/maps/Sz9Bw7geEvPpgw6V9" className={styles.contactMethod}>
            <img className={styles.contactMethodImg} src="/img/location-icon-light.svg" alt="Location Icon" />
            <div className={styles.contactMethodText}>73 Maple Rdg Dr SE, Cartersville, GA 30121</div>
        </a>
    </section>
  )
}
