import styles from "./events.module.css"
import EventList from "./EventList"

interface eventsPropsType{
    search: string
}

export default function Events(props: eventsPropsType) {
  return (
    <section className={styles.eventsSection}>
            <EventList search={props.search} />
    </section>
  )
}
