"use client"

import styles from "./events.module.css"
import UpcomingEvent from "../../HomePage/UpcomingEvents/UpcomingEvent"
import { useEffect, useState } from "react"
import getEvents from "@/app/controllers/events/getEvents"
import Loading from "../../../Misc/Loading/Loading"

interface eventsPropsType{
    search: string
}

export default function EventList(props: eventsPropsType) {

    const [eventData, setEventData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    
    const events = eventData.map((data: any, i)=>{
        return <UpcomingEvent key={i} {...data} />
    })

    useEffect(()=>{
        const searchStr = (props.search == "default") ? "" : `/${props.search}`

        getData()
        async function getData(){
            const fetchEventData = await getEvents(searchStr);
            setEventData(fetchEventData.data.filter((event: any)=>{
                return event.date <= new Date().getTime()
            }))
            setIsLoading(false)
        }
    }, [props.search])

  return (
    <div className={`center ${styles.eventList}`}>
        {(!isLoading && eventData.length == 0) && <div className="noData">No Events</div>}
        {(isLoading) && <Loading />}
        {events}
    </div>
  )
}
