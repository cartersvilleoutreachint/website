"use client"

import styles from "./events.module.css"
import UpcomingEvent from "../../HomePage/UpcomingEvents/UpcomingEvent"
import { useState } from "react"

interface eventsPropsType{
    search: string
}

export default async function EventList(props: eventsPropsType) {

    const [eventData, setEventData] = useState([])

    if(props.search == "default"){
        // Default Data

    }else{
        // Search data

    }
    const events = eventData.map((data: any, i)=>{
        return <UpcomingEvent key={i} {...data} />
    })

  return (
    <div className={`center ${styles.eventList}`}>
        {events}
    </div>
  )
}
