"use client"

import styles from "./event.module.css"
import PageBanner from "../../Misc/PageBanner/PageBanner"
import getEventContent from "@/app/controllers/events/getEventContent"
import { useEffect, useState } from "react"
import getFormattedTime from "../../utils/getFormattedTime"
import Loading from "../../Misc/Loading/Loading"

export default function Event(props: {eventId: string}) {

    const [currentDate, setCurentDate] = useState("")
    const [currentContent, setCurrentContent] = useState("")
    const [currentTitle, setCurrentTitle] = useState("")
    const [currentLocationUrl, setCurrentLocationUrl] = useState("")
    const [currentLocation, setCurrentLocation] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const [hasContent, setHasContent] = useState(false)

    useEffect(()=>{
        getData()
        async function getData(){
            const fetchEventData = await getEventContent(props.eventId);
            if(fetchEventData.data.content != undefined){
                setCurentDate(getFormattedTime(fetchEventData.data.date))
                setCurrentTitle(fetchEventData.data.title)
                setCurrentLocation(fetchEventData.data.location)
                setCurrentLocationUrl(fetchEventData.data.locationUrl)
                setCurrentContent(fetchEventData.data.content)
                setHasContent(true)
            }
            setIsLoading(false)
        }
    }, [])
  return (
    <section className={styles.eventSection}>
        <PageBanner pageTitle={currentTitle} imgSrc={"/img/pagebanners/calendar.jpg"} />
        <article className={styles.eventWrapper}>
            {(isLoading) && <Loading />}
            {(!isLoading && !hasContent) && <div className="noData">Invalid Event</div>}

            {(!isLoading && hasContent) && <>
            <h2 className={styles.title}>{currentTitle}</h2>
            <div className={styles.dateWrapper}>
                <img className={styles.icon} src="/img/date-icon.svg" alt="Date Icon" />
                <span>{currentDate}</span>
            </div>
            <div className={styles.locationWrapper}>
                <img className={styles.icon} src="/img/location-icon.svg" alt="Location Icon" />
                <span>{currentLocation}</span>
            </div>
            <a href={currentLocationUrl} target="_blank" className={`main-button ${styles.locationLink}`}>View Location</a>
            <div className={styles.content} dangerouslySetInnerHTML={{"__html": currentContent}}></div>
            </>}
        </article>
    </section>
  )
}
