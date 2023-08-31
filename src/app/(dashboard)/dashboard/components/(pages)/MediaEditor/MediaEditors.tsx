"use client"

import MediaEditor from "./MediaEditor"
import styles from "../../editor.module.css"
import getMedia from "@/app/(mainsite)/components/Pages/HomePage/MediaCoverage/getMedia"
import AddMedia from "./AddMedia"

export default function MediaEditors() {

  function openForm(){
    document.getElementById("formShader")!.style.pointerEvents = "all"
    document.getElementById("formShader")!.style.opacity = "1";
    document.getElementById("formWrapper")!.style.pointerEvents = "all";
    document.getElementById("formWrapper")!.style.opacity = "1";
    document.getElementById("formWrapper")!.style.transform = "translateY(0)";
  }

  const editorElems = getMedia().map((data, i)=>{
    return <MediaEditor key={i} {...data} />
  })


  return (
    <div className="center">
        <div className={styles.wrapper}>
          <AddMedia />
          <button onClick={openForm} className={styles.addButton}>+</button>
          {editorElems}
        </div>
    </div>
  )
}
