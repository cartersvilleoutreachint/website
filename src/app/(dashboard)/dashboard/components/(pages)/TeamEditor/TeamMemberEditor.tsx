import styles from "../../editor.module.css"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import updateTeamMember from "@/app/controllers/team/updateTeamMember"
import reorderTeam from "@/app/controllers/team/reorderTeam"
import fileUploadHandler from "@/app/lib/fileuploadhandler"
import deleteTeamMember from "@/app/controllers/team/deleteTeamMember"

interface teamMemberEditorType extends teamMemberType{
  setReloadPage: any,
  _id: string
}

export default function TeamMemberEditor(props: teamMemberEditorType) {

  const unsavedChanges: any = useRef()
  const isSaving: any = useRef()
  const nameRef: any = useRef()
  const roleRef: any = useRef()
  const descriptionRef: any = useRef()
  const fileUploadRef: any = useRef()

  const [currentImage, setCurrentImage] = useState(props.imgSrc)
  const [savingState, setSavingState] = useState(false)

  function setUnsavedChanges(){
    unsavedChanges.current = true
  }

  async function moveUp(){
    await reorderTeam(props._id, "up")
    props.setReloadPage((old: boolean)=>!old)
  }
  async function moveDown(){
    await reorderTeam(props._id, "down")
    props.setReloadPage((old: boolean)=>!old)
  }

  async function saveChanges(img = currentImage){
    await updateTeamMember(props._id, {role: roleRef.current.value, imgSrc: img, name: nameRef.current.value, description: descriptionRef.current.value})
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
    {(savingState) && <span>Loading...</span>}
    <aside className={styles.teamMemberEditor}>
        <div className="dashboard-reorder">
            <button onClick={moveUp} className="dashboard-reorder-up"></button>
            <button onClick={moveDown} className="dashboard-reorder-down"></button>
        </div>

        <div className={styles.profileWrapper}>
            <Image className={styles.profileImg} height={100} width={100} src={currentImage} alt="Profile Image" />
            <div className={styles.profileTitle}>Profile Photo</div>
            <label htmlFor="profilePhotoInput" className={styles.photoInput}>Choose File</label>
            <input ref={fileUploadRef} 
            onChange={async (evt)=>{
              const imgLink = await fileUploadHandler(evt);
              setCurrentImage(imgLink)
              saveChanges(imgLink)
            }} 
            type="file" name="profilePhotoInput" id="profilePhotoInput" style={{display: "none"}}  />
        </div>

        <div className={styles.inputWrapper}>
            <input onInput={setUnsavedChanges} ref={nameRef} defaultValue={props.name} placeholder="Name" type="text" name="nameInput" id="nameInput" className={styles.nameInput} />
            <input onInput={setUnsavedChanges} ref={roleRef} defaultValue={props.role} placeholder="Role" type="text" name="roleInput" id="roleInput" className={styles.roleInput} />
            <textarea onInput={setUnsavedChanges} ref={descriptionRef} defaultValue={props.description} placeholder="Description" name="descInput" id="descInput" className={styles.descInput}></textarea>
        </div>

        <button className={styles.deleteButton} onClick={async()=>{await deleteTeamMember(props._id); props.setReloadPage((old: boolean)=>!old)}}></button>
    </aside>
    </>
  )
}
