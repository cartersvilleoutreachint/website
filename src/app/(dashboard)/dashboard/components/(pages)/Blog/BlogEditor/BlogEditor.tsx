"use client"

import styles from "./blogeditor.module.css"
import styles2 from "../../../editor.module.css"
import styles3 from "../../../additem.module.css"
import Image from "next/image"
import TextEditor from "../../../TextEditor/TextEditor"
import createBlog from "@/app/controllers/createBlog"
import { useState, useRef, useEffect } from "react"
import fileUploadHandler from "@/app/lib/fileuploadhandler"

export default function BlogEditor(props: {currentBlogId: string, setReloadPage: any}) {

    const editorRef: any = useRef()
    const wrapperRef: any = useRef()
    const shaderRef: any = useRef()
    const titleRef: any = useRef()

    const [contentChanged, setContentChanged] = useState(false)
    const [imageIsUploading, setImageIsUploading] = useState(false)
    const [currentImg, setCurrentImg] = useState("/img/blank.png")
    const [currentTitle, setCurrentTitle] = useState("")
    const [currentContent, setCurrentContent] = useState("")

    async function handleSubmit(evt: any){
        evt.preventDefault()
        const newBlogData: newBlogType = {
            metadata:{
                title: titleRef.current.value,
                url: `/article/${(currentTitle.toLowerCase()).trim().replaceAll(" ", "+")}`,
                imgSrc: currentImg,
                date: (new Date().getTime())
            },
            content: editorRef.current.getContent()
        }
        await createBlog(newBlogData)
        closeForm()
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

        

      useEffect(()=>{
        if(props.currentBlogId == ""){
            setCurrentImg("/img/blank.png")
            setCurrentTitle("")
            setCurrentContent("")
            titleRef.current.value = ""
        }else{
            setCurrentImg("/img/blank.png")
            setCurrentTitle("")
            setCurrentContent("")
            titleRef.current.value = ""
            setData();
        }
        async function setData(){
            const fetchData = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/api/blog/${props.currentBlogId}`)
            const blogData = await fetchData.json();
            setCurrentImg(blogData.data.metadata.imgSrc)
            setCurrentTitle(blogData.data.metadata.title)
            setCurrentContent(blogData.data.content)
            titleRef.current.value = blogData.data.metadata.title
        }
      }, [props.currentBlogId])


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
            <span className={styles.inputTitle}>Title:</span><input
            ref={titleRef}
            required placeholder="Blog Title" defaultValue={currentTitle} type="text" name="titleInput" id="titleInput" className={styles.titleInput} />
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
