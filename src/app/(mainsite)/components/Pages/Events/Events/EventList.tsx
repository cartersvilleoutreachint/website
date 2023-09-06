"use client"

import styles from "./events.module.css"
import UpcomingEvent from "../../HomePage/UpcomingEvents/UpcomingEvent"
import { useEffect, useState } from "react"
import getEvents from "@/app/controllers/events/getEvents"

interface eventsPropsType{
    search: string
}

export default function EventList(props: eventsPropsType) {

    const [eventData, setEventData] = useState([])

    
    const events = eventData.map((data: any, i)=>{
        return <UpcomingEvent key={i} {...data} />
    })

    useEffect(()=>{
        const searchStr = (props.search == "default") ? "" : `/${props.search}`

        getData()
        async function getData(){
            const fetchEventData = await getEvents(searchStr);
            setEventData(fetchEventData.data)
        }
    }, [props.search])

  return (
    <div className={`center ${styles.eventList}`}>
        {events}
    </div>
  )
}
