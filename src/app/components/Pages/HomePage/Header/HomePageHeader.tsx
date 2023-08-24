import styles from "./homepageheader.module.css"
import Link from "next/link"

export default function HomePageHeader() {
  return (
    <header className={styles.header} id="homepageHeader">
        <div className="shader center">
          <div className={styles.headerContent}>
            <h1 className={styles.mainHeading}>Bringing the Word of God to all corners of the earth</h1>
            <h3 className={styles.mainSubHeading}>Our goal is to make sure all people have the Word of God brought to them and the chance to change their lives for the better.</h3>
            <div className="center">
              <Link className={`${styles.upcomingEvents} main-button`} href="/events">Upcoming Events</Link>
            </div>
          </div>
        </div>
    </header>
  )
}
