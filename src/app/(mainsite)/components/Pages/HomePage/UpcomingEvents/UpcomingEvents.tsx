"use client"

import Carousel from "react-multi-carousel"
import getEvents from "@/app/controllers/events/getEvents"
import styles from "./upcomingevents.module.css"
import UpcomingEvent from "./UpcomingEvent"
import getCarouselBreakpoints from "../../../utils/getCarouselBreakpoints"
import { useEffect, useState } from "react"

export default function UpcomingEvents() {

  const [eventsData, setEventsData] = useState([]);

      const upcomingEventsElems = eventsData.map((data: any, i)=>{
        return(
            <UpcomingEvent key={i} {...data} />
        )
      })

      useEffect(()=>{
        getData()
        async function getData(){
          const fetchEventsData = await getEvents();
          setEventsData(fetchEventsData.data)
        }
      }, [])

  return (
    <section className={styles.upcomingEvents}>
        <h2 className={styles.upcomingEventsTitle}>Upcoming Events</h2>
        <Carousel
        responsive={getCarouselBreakpoints(1,1,2)}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={6000}
        renderButtonGroupOutside={true}
        >
            {upcomingEventsElems}
        </Carousel>
    </section>
  )
}
