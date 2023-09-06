import getFormattedTime from "@/app/(mainsite)/components/utils/getFormattedTime";
import styles from "./dashboardevents.module.css"
import Image from "next/image";
import styles2 from "@/app/(mainsite)/components/Pages/HomePage/UpcomingEvents/upcomingevents.module.css"
import deleteEvent from "@/app/controllers/events/deleteEvent";

interface eventBoxType extends eventType{
  _id: string,
  setCurrentEventId: any
}
export default function EditEventBox(props: eventBoxType) {

  function openForm(){
    document.getElementById("formShader")!.style.pointerEvents = "auto"
    document.getElementById("formShader")!.style.opacity = "1";
    document.getElementById("formWrapper")!.style.pointerEvents = "auto";
    document.getElementById("formWrapper")!.style.opacity = "1";
    document.getElementById("formWrapper")!.style.transform = "translateY(0)";
  }

  return (
    <aside className={styles2.upcomingEvent}>
        <h4 className={styles2.upcomingEventTitle}>{props.title}</h4>
        <div className={styles2.dateWrapper}>
            <Image src="/img/date-icon.svg" width={100} height={100} alt="Date Icon" />
            <span>{getFormattedTime(props.date)}</span>
        </div>
        <div className={styles2.locationWrapper}>
            <Image src="/img/location-icon.svg" width={100} height={100} alt="Location Icon" />
            <span>{props.location}</span>
        </div>
        <p className={styles2.shortDesc}>{props.shortDesc}</p>
        <div className={`${styles.buttonWrapper} center`}>
            <button onClick={()=>{
              props.setCurrentEventId(props._id)
              openForm()
            }} className={`${styles.editButton} main-button`}>Edit</button>
            <button onClick={()=>{deleteEvent(props._id)}} className={`${styles.deleteButton} main-button`}>Delete</button>
        </div>
      </aside>
  )
}
