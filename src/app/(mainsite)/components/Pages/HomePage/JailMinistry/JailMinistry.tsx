import styles from "./jailministry.module.css"
import Link from "next/link"

export default function JailMinistry() {
  return (
    <section className={styles.jailMinistry}>
        
            
                <h2 className={styles.jailMinistryHeading}>Our jail ministry</h2>
                <p className={styles.jailMinistryDescription}>We minister in the Bartow County Jail to inmates. We not only works to help inmates overcome the challenges of incarceration, but also teach them how to have power over the devil by relying on their faith in God. No matter what someone has done, they can still be redeemed and change their lives through a relationship with Jesus Christ.</p>
                
                <Link href="/blog" className={`main-button ${styles.readMore}`}>Read More</Link>
            
            <div className={"shader " + styles.shader}></div>
    </section>
  )
}
