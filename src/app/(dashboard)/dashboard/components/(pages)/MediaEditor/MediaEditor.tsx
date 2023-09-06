import styles from "../../editor.module.css"
import styles2 from "./mediaeditor.module.css"
import Image from "next/image"
import reorderMedia from "@/app/controllers/media/reorderMedia"
import updateMedia from "@/app/controllers/media/updateMedia"
import deleteMedia from "@/app/controllers/media/deleteMedia"
import fileUploadHandler from "@/app/lib/fileuploadhandler";
import { useEffect, useRef, useState } from "react"

interface mediaEditorType extends mediaType{
  setReloadPage: any,
  _id: string
}

export default function MediaEditor(props: mediaEditorType) {

  const unsavedChanges: any = useRef()
  const isSaving: any = useRef()
  const titleRef: any = useRef()
  const linkRef: any = useRef()

  const [currentImg, setCurrentImg] = useState(props.imgSrc)
  const [savingState, setSavingState] = useState(false)

  function setUnsavedChanges(){
    unsavedChanges.current = true
  }

  async function moveUp(){
    await reorderMedia(props._id, "up")
    props.setReloadPage((old: boolean)=>!old)
  }
  async function moveDown(){
    await reorderMedia(props._id, "down")
    props.setReloadPage((old: boolean)=>!old)
  }

  async function saveChanges(){
    await updateMedia(props._id, {link: linkRef.current.value, imgSrc: currentImg, title: titleRef.current.value})
  }

  setInterval(async ()=>{
    if(unsavedChanges.current){
      unsavedChanges.current = false
      if(!isSaving.current){
        isSaving.current = true
        setSavingState(true)
        await saveChanges()
        setSavingState(false)
        isSaving.current = false
      }
    }
  }, 2000)

  useEffect(()=>{
    if(isSaving.current == true){
      setSavingState(true)
    }else{
      setSavingState(false)
    }
  }, [isSaving])

  return (
    <>
    {(savingState == true) && <span>SAVING</span>}
    <aside className={styles.teamMemberEditor}>
      
    <div className="dashboard-reorder">
        <button onClick={moveUp} className="dashboard-reorder-up"></button>
        <button onClick={moveDown} className="dashboard-reorder-down"></button>
    </div>

    <div className={styles.profileWrapper}>
        <Image className={`${styles.profileImg} ${styles2.coverImg}`} height={100} width={200} src={currentImg} alt="Profile Image" />
        <div className={styles.profileTitle}>Cover Photo</div>
        <label htmlFor="photoInput" className={styles.photoInput}>Choose File</label>
        <input onChange={async (evt)=>{
              setUnsavedChanges()
              const imgLink = await fileUploadHandler(evt);
              setCurrentImg(imgLink)
            }} type="file" name="photoInput" id="photoInput" style={{display: "none"}}  />
    </div>

    <div className={styles.inputWrapper}>
        <input ref={linkRef} onInput={setUnsavedChanges} defaultValue={props.link} placeholder="Link" type="text" name="linkInput" id="linkInput" className={styles.nameInput} />
        <input ref={titleRef} onInput={setUnsavedChanges} defaultValue={props.title} placeholder="Title" type="text" name="titleInput" id="titleInput" className={styles.roleInput} />
    </div>

    <button className={styles.deleteButton} onClick={async()=>{await deleteMedia(props._id); props.setReloadPage((old: boolean)=>!old)}}></button>
</aside>
</>
  )
}
