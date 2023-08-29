import styles from "./events.module.css"
import UpcomingEvent from "../../HomePage/UpcomingEvents/UpcomingEvent"
import testUpcomingEventsData from "../../HomePage/UpcomingEvents/testUpcomingEventData"

interface eventsPropsType{
    search: string
}

export default async function EventList(props: eventsPropsType) {

    if(props.search == "default"){
        // Default Data

    }else{
        // Search data

    }
    const events = testUpcomingEventsData.map((data, i)=>{
        return <UpcomingEvent key={i} {...data} />
    })

  return (
    <div className={`center ${styles.eventList}`}>
        {events}
    </div>
  )
}
