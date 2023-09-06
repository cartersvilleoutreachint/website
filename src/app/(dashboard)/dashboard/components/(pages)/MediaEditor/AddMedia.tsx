import { useState, useRef } from "react";
import styles from "../../additem.module.css"
import styles2 from "../../editor.module.css"
import styles3 from "./mediaeditor.module.css"
import Image from "next/image";
import fileUploadHandler from "@/app/lib/fileuploadhandler";
import createMedia from "@/app/controllers/media/createMedia";

export default function AddMedia(props: {setReloadPage: any}) {

  const [currentImg, setCurrentImg] = useState("/img/blank.png");
  const shaderRef: any = useRef();
  const wrapperRef: any = useRef();
  const titleRef: any = useRef()
  const linkRef: any = useRef()

  async function formSubmitHandler(evt: any){
    evt.preventDefault();
    const newMedia: newMediaType = {
      imgSrc: currentImg,
      title: titleRef.current.value,
      link: linkRef.current.value
    }
    await createMedia(newMedia)
    closeForm()
    setCurrentImg("/img/blank.png")
    titleRef.current.value = ""
    linkRef.current.value = ""
    props.setReloadPage((old: boolean)=>!old)
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

  return (
    <aside id="formWrapper" ref={wrapperRef} className={`center ${styles.formWrapper}`}>
      <form className={styles.form} onSubmit={formSubmitHandler}>
      <div className={styles.profileWrapper}>
            <Image className={`${styles.profileImg} ${styles3.coverImg}`} height={100} width={200} src={currentImg} alt="Cover Image" />
            <div className={styles.profileTitle}>Cover Photo</div>
            <label htmlFor="photoInput" className={styles2.photoInput}>Choose File</label>
            <input onChange={async (evt)=>{
              const imgLink = await fileUploadHandler(evt);
              setCurrentImg(imgLink)
            }} type="file" name="photoInput" id="photoInput" style={{display: "none"}}  />
        </div>

        <div className={styles.inputWrapper}>
            <input ref={titleRef} required placeholder="Title" type="text" name="titleInput" id="titleInput" className={styles.nameInput} />
            <input ref={linkRef} required placeholder="Link" type="text" name="linkInput" id="linkInput" className={styles.roleInput} />
        </div>
        <div className="center">
          <input type="submit" className="main-button" value="Publish" />
        </div>
        <button onClick={(evt)=>{evt.preventDefault(); closeForm()}} className={styles.closeForm}>&times;</button>
      </form>
      
      <div
      id="formShader"
      className={`shader ${styles.shader}`}
      ref={shaderRef}
      ></div>
    </aside>
  )
}