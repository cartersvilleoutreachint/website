import styles from "./donate.module.css"
import Image from "next/image"

export default function Donate() {
  return (
    <section className={styles.donateSection}>
        <div>
            <h2>Help us continue our mission of spreading God's message.</h2>
            <p>Donations help us reach more people and share God's message with the world.  We're committed to being good stewards of your donation and using it to further God's kingdom.</p>
            <span>Your donation is tax-deductible, and we're grateful for your support.</span>
            <a target="_blank" href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=cartout-tc@att.net&lc=US&no_note=0&item_name=Thank+you+for+your+donation!&cn=&curency_code=USD&bn=PP-DonationsBF:btn_donateCC_LG.gif:NonHosted">
            <Image width={200} height={90} src="/img/buttons/paypal-button.png" alt="paypal button"/>
        </a>
        </div>
        <Image className={styles.bgImg} src="/img/donate-bg.jpg" width={1280} height={720} alt="Image of a church" />
        
    </section>
  )
}
