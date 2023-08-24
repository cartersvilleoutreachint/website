import styles from "./upcomingevents.module.css"
import Image from "next/image"
import Link from "next/link"
import getFormattedTime from "../../../utils/getFormattedTime"

interface upcomingEventPropType{
    title: string,
    date: number,
    location: string,
    locationUrl: string,
    moreInfoUrl: string,
    shortDesc: string
}

export default function UpcomingEvent(props: upcomingEventPropType) {

  return (
    <aside className={styles.upcomingEvent}>
        <h4 className={styles.upcomingEventTitle}>{props.title}</h4>
        <div className={styles.dateWrapper}>
            <Image src="./img/date-icon.svg" width={100} height={100} alt="Date Icon" />
            <span>{getFormattedTime(props.date)}</span>
        </div>
        <div className={styles.locationWrapper}>
            <Image src="./img/location-icon.svg" width={100} height={100} alt="Location Icon" />
            <span>{props.location}</span>
        </div>
        <p className={styles.shortDesc}>{props.shortDesc}</p>
        <div className={styles.linkWrapper}>
            <Link href={props.moreInfoUrl} className={`main-button ${styles.moreInfoLink}`}>More Information</Link>
            <a href={props.locationUrl} className={`main-button ${styles.viewLocationLink}`}>View Location</a>
        </div>
    </aside>
  )
}
