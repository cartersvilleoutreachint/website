"use client"

import MediaEditor from "./MediaEditor"
import styles from "../../editor.module.css"
import getMedia from "@/app/controllers/media/getMedia"
import AddMedia from "./AddMedia"
import { useEffect, useState } from "react"

export default function MediaEditors() {

  function openForm(){
    document.getElementById("formShader")!.style.pointerEvents = "all"
    document.getElementById("formShader")!.style.opacity = "1";
    document.getElementById("formWrapper")!.style.pointerEvents = "all";
    document.getElementById("formWrapper")!.style.opacity = "1";
    document.getElementById("formWrapper")!.style.transform = "translateY(0)";
  }

  const [mediaData, setMediaData] = useState([])
  const [reloadPage, setReloadPage] = useState(true)

  const editorElems: any = mediaData.map((data: any, i: number)=>{
    return <MediaEditor setReloadPage={setReloadPage} key={Math.floor(Math.random() * 9999999)} {...data} />
  })

  async function getData(){
    const fetchMediaData = await getMedia();
    setMediaData(fetchMediaData.data)
  }

  useEffect(()=>{
    getData()
    
  }, [reloadPage])

  return (
    <div className="center">
        <div className={styles.wrapper}>
          <AddMedia setReloadPage={setReloadPage} />
          <button onClick={openForm} className={styles.addButton}>+</button>
          {editorElems}
        </div>
    </div>
  )
}
