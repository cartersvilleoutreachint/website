import styles from "./events.module.css"
import {Suspense} from "react"
import EventList from "./EventList"
import Loading from "@/app/components/Misc/Loading/Loading"

interface eventsPropsType{
    search: string
}

export default function Events(props: eventsPropsType) {
  return (
    <section className={styles.eventsSection}>
        <Suspense fallback={<Loading/>}>
            <EventList search={props.search} />
        </Suspense>
    </section>
  )
}
