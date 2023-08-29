"use client"

import Carousel from "react-multi-carousel"
import getUpcomingEventsData from "./getUpcomingEventsData"
import styles from "./upcomingevents.module.css"
import UpcomingEvent from "./UpcomingEvent"
import getCarouselBreakpoints from "../../../utils/getCarouselBreakpoints"

export default function UpcomingEvents() {


      const upcomingEventsElems = (getUpcomingEventsData()).map((data, i)=>{
        return(
            <UpcomingEvent key={i} {...data} />
        )
      })

  return (
    <section className={styles.upcomingEvents}>
        <h2 className={styles.upcomingEventsTitle}>Upcoming Events</h2>
        <Carousel
        responsive={getCarouselBreakpoints(1,1,2)}
        infinite={true}
        // autoPlay={true}
        autoPlaySpeed={6000}
        renderButtonGroupOutside={true}
        >
            {upcomingEventsElems}
        </Carousel>
    </section>
  )
}
