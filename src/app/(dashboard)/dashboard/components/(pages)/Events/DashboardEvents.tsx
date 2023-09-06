"use client"

import EventEditor from "./EventEditor/EventEditor"
import EditEventBox from "./EditEventBox"
import getEvents from "@/app/controllers/events/getEvents"
import styles2 from "@/app/(mainsite)/components/Pages/Blog/Blog/blog.module.css"
import styles3 from "../../editor.module.css"
import { useEffect, useState } from "react"
import Pagination from "@/app/(mainsite)/components/Vendor/Pagination/Pagination"


export default function DashboardEvents(props: {search: string}) {



    const [eventsData, setEventsData] = useState([])
    const [currentEventId, setCurrentEventId] = useState("")

    const posts = eventsData.map((data: any, i: any)=>{
        //@ts-ignore
        return <EditEventBox setCurrentEventId={setCurrentEventId} key={i} {...data} />
    })

    const [reloadPage, setReloadPage] = useState(true);
    const [pagedItems, setPagedItems] = useState(<></>);
 


    function openForm(){
        document.getElementById("formShader")!.style.pointerEvents = "auto"
        document.getElementById("formShader")!.style.opacity = "1";
        document.getElementById("formWrapper")!.style.pointerEvents = "auto";
        document.getElementById("formWrapper")!.style.opacity = "1";
        document.getElementById("formWrapper")!.style.transform = "translateY(0)";
      }

      useEffect(()=>{
        let searchString = ""
        if(!(props.search == "default" || props.search == "")){
            // Default Data
            searchString = "/" + encodeURIComponent(props.search)
        }
        getData()
        async function getData(){
            const events = await getEvents(searchString);
            setEventsData(events.data)
        }
      }, [reloadPage])
    
  return (
    <>
    <div className="center">
        <EventEditor
            currentEventId={currentEventId}
            setReloadPage={setReloadPage}
        />
        <button onClick={()=>{
            setCurrentEventId("")
            openForm()
        }} className={styles3.addButton}>+</button>
        </div>
  <div className={`center ${styles2.blogList}`}>
    
        {pagedItems}
       
       <Pagination
             reload={eventsData}
             items={posts}
             setPagedItems={setPagedItems}
             showAmt={4}
             itemsPerPage={6}
         /> 
  </div>
  </>
    )
}
