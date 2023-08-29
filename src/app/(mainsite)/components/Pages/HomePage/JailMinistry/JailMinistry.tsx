import styles from "./jailministry.module.css"
import Link from "next/link"

export default function JailMinistry() {
  return (
    <section className={styles.jailMinistry}>
        
            
                <h2 className={styles.jailMinistryHeading}>Our jail ministry</h2>
                <p className={styles.jailMinistryDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                
                <Link href="/blog" className={`main-button ${styles.readMore}`}>Read More</Link>
            
            <div className={"shader " + styles.shader}></div>
    </section>
  )
}
