"use client"

import styles from "../../Blog/BlogEditor/blogeditor.module.css"
import styles2 from "../../../editor.module.css"
import styles3 from "../../../additem.module.css"
import Image from "next/image"
import TextEditor from "../../../TextEditor/TextEditor"
import { useState, useRef, useEffect } from "react"
import getEvent from "@/app/controllers/events/getEvent"
import fileUploadHandler from "@/app/lib/fileuploadhandler"
import createEvent from "@/app/controllers/events/createEvent"
import updateEvent from "@/app/controllers/events/updateEvent"

export default function EventEditor(props: {currentEventId: string, setReloadPage: any}) {

    const editorRef: any = useRef()
    const wrapperRef: any = useRef()
    const shaderRef: any = useRef()
    const titleRef: any = useRef()
    const descRef: any = useRef()
    const locationRef: any = useRef()
    const locationUrlRef: any = useRef()
    const dateRef: any = useRef()


    const [contentChanged, setContentChanged] = useState(false)
    const [imageIsUploading, setImageIsUploading] = useState(false)

    const [currentImg, setCurrentImg] = useState("/img/blank.png")
    const [currentTitle, setCurrentTitle] = useState("")
    const [currentDesc, setCurrentDesc] = useState("")
    const [currentLocation, setCurrentLocation] = useState("")
    const [currentLocationUrl, setCurrentLocationUrl] = useState("")
    const [currentContent, setCurrentContent] = useState("")
    const [currentDate, setCurrentDate] = useState((new Date().getTime()))


    useEffect(()=>{
        if(props.currentEventId == ""){
            titleRef.current.value = ("")
            setCurrentImg("/img/blank.png")
            descRef.current.value = ("")
            locationRef.current.value = ("")
            dateRef.current.value = getInputTime((new Date().getTime()))
            locationUrlRef.current.value = ("")
            setCurrentContent("")
        }else{
            getData()
        }
        async function getData(){
            const eventdatas = await getEvent("/" + props.currentEventId);
            const eventData = eventdatas.data
            titleRef.current.value = (eventData.title)
            setCurrentImg(eventData.imgSrc)
            descRef.current.value = (eventData.shortDesc)
            locationRef.current.value = (eventData.location)
            dateRef.current.value = getInputTime(eventData.date)
            locationUrlRef.current.value = (eventData.locationUrl)
            setCurrentContent(eventData.content)
        }
       
    }, [props.currentEventId])    

    async function handleSubmit(evt: any){
        evt.preventDefault()
        const newEvent: newEventType = {
            title: titleRef.current.value,
            date: (new Date(dateRef.current.value).getTime()),
            location: locationRef.current.value,
            locationUrl: locationUrlRef.current.value,
            shortDesc: descRef.current.value,
            imgSrc: currentImg,
            content: editorRef.current.getContent()
                    }
        if(props.currentEventId == ""){
            newEvent.moreInfoUrl = "/event/" + encodeURIComponent(titleRef.current.value)
            await createEvent(newEvent)
            props.setReloadPage((old: boolean)=>!old)
            closeForm()
        }else{
            await updateEvent("/" + props.currentEventId, newEvent)
            props.setReloadPage((old: boolean)=>!old)
            closeForm()
        }
    }

    function closeForm(){
        shaderRef.current.ontransitionend = ()=>{
          shaderRef.current.style.pointerEvents = "none"
          wrapperRef.current.style.pointerEvents = "none"
    
          shaderRef.current.ontransitionend = undefined;
        }
        shaderRef.current.style.opacity = "0";
        wrapperRef.current.style.opacity = "0";
        wrapperRef.current.style.transform = "translateY(-20px)";
      }

      function getInputTime(date: number | string): string{
        const newDate = new Date(date);
        newDate.setMinutes(newDate.getMinutes() - newDate.getTimezoneOffset())
      return newDate.toISOString().slice(0,16)
      }
      

  return (
    <div id="formWrapper" ref={wrapperRef} className={styles.wrapper}>
        <form className={styles.form} onSubmit={handleSubmit}>
    <div className={styles.headerWrapper}>
        <div>
            <Image className={styles.coverImg} src={currentImg} alt="cover photo" width={200} height={100} />
            <div>
                <div className={`${styles2.profileTitle} ${styles.photoTitle}`}>Cover Photo:</div>
                <label htmlFor="photoInput" className={`${styles2.photoInput} ${styles.photoInput}`}>Choose File</label>
            </div>
            <div className={`${styles.titleWrapper} ${styles2.titleWrapper}`}>
            <textarea required placeholder="Short Description of the event" defaultValue={currentDesc} ref={descRef} name="descInput" id="descInput" className={styles.titleInput}></textarea>
            </div>
        </div>
        <div className={`${styles2.inputWrapper} ${styles.inputWrapper}`}>
            <div className={styles.titleWrapper}>
            <span className={styles.inputTitle}>Title:</span><input required placeholder="Event Title" ref={titleRef}  defaultValue={currentTitle} type="text" name="titleInput" id="titleInput" className={styles.titleInput} />
            </div>

            <div className={styles.titleWrapper}>
            <span className={styles.inputTitle}>Location Url:</span><input required placeholder="Event Location Url" ref={locationUrlRef} defaultValue={currentLocationUrl} type="text" name="locationUrlInput" id="locationUrlInput" className={styles.titleInput} />
            </div>

            <div className={styles.titleWrapper}>
            <span className={styles.inputTitle}>Location:</span><input required placeholder="Event Location" ref={locationRef}  defaultValue={currentLocation} type="text" name="locationInput" id="locationInput" className={styles.titleInput} />
            </div>
            <div className={styles.titleWrapper}>
            <span className={styles.inputTitle}>Date/Time:</span><input required placeholder="Event Date/Time" ref={dateRef}  defaultValue={getInputTime(currentDate)} type="datetime-local" name="dateInput" id="dateInput" className={styles.titleInput} />
            </div>
            <div className={`center ${styles.buttonWrapper}`}>
                
                <button className="main-button">Save Draft</button>
                <button className="main-button">Publish</button>
            </div>
        </div>
        <button className={styles2.deleteButton}></button>
    </div>
    <div className={styles.textEditorWrapper}>
        <TextEditor
        currentContent={currentContent}
        setContentChanged={setContentChanged}
        editorRef={editorRef}
        setImageIsUploading={setImageIsUploading}
        />
    </div>
        <input onChange={async (evt)=>{
              const imgLink = await fileUploadHandler(evt);
              setCurrentImg(imgLink)
            }} type="file" name="photoInput" id="photoInput" style={{display: "none"}}  />
        <button onClick={(evt)=>{evt.preventDefault(); closeForm()}} className={styles3.closeForm}>&times;</button>
        </form>
        <div  id="formShader" ref={shaderRef} className={`shader ${styles.shader}`}></div>
    </div>
  )
}
