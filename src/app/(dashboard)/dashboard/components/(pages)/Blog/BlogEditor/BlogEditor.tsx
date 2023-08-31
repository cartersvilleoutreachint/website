"use client"

import styles from "./blogeditor.module.css"
import styles2 from "../../../editor.module.css"
import styles3 from "../../../additem.module.css"
import Image from "next/image"
import TextEditor from "../../../TextEditor/TextEditor"
import { useState, useRef, useEffect } from "react"

export default function BlogEditor() {

    const editorRef: any = useRef()
    const wrapperRef: any = useRef()
    const shaderRef: any = useRef()

    const [editorContent, setEditorContent] = useState("")
    const [imageIsUploading, setImageIsUploading] = useState(false)
    const [currentImg, setCurrentImg] = useState("/img/media/mediapic1.png")
    const [currentTitle, setCurrentTitle] = useState("")

    function handleSubmit(evt: any){
        evt.preventDefault()
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
    <div id="formWrapper" ref={wrapperRef} className={styles.wrapper}>
        <form className={styles.form} onSubmit={handleSubmit}>
    <div className={styles.headerWrapper}>
        <div>
            <Image className={styles.coverImg} src={currentImg} alt="cover photo" width={200} height={100} />
            <div>
                <div className={`${styles2.profileTitle} ${styles.photoTitle}`}>Cover Photo:</div>
                <label htmlFor="photoInput" className={`${styles2.photoInput} ${styles.photoInput}`}>Choose File</label>
            </div>
        </div>
        <div className={`${styles2.inputWrapper} ${styles.inputWrapper}`}>
            <div className={styles.titleWrapper}>
            <span className={styles.inputTitle}>Title:</span><input placeholder="Blog Title" defaultValue={currentTitle} type="text" name="titleInput" id="titleInput" className={styles.titleInput} />
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
        setEditorContent={setEditorContent}
        editorRef={editorRef}
        setImageIsUploading={setImageIsUploading}
        />
    </div>
        <input type="file" name="photoInput" id="photoInput" style={{display: "none"}}  />
        <button onClick={(evt)=>{evt.preventDefault(); closeForm()}} className={styles3.closeForm}>&times;</button>
        </form>
        <div  id="formShader" ref={shaderRef} className={`shader ${styles.shader}`}></div>
    </div>
  )
}
