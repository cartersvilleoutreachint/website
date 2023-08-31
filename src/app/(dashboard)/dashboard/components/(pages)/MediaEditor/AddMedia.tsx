import { useState, useRef } from "react";
import styles from "../../additem.module.css"
import styles2 from "../../editor.module.css"
import styles3 from "./mediaeditor.module.css"
import Image from "next/image";

export default function AddMedia() {

  const [currentImg, setCurrentImg] = useState("/img/media/mediapic1.png");
  const [formIsActive, setFormIsActive] = useState(false)
  const shaderRef: any = useRef();
  const wrapperRef: any = useRef();

  function formSubmitHandler(evt: any){
    evt.preventDefault();
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
            <input type="file" name="photoInput" id="photoInput" style={{display: "none"}}  />
        </div>

        <div className={styles.inputWrapper}>
            <input required placeholder="Title" type="text" name="titleInput" id="titleInput" className={styles.nameInput} />
            <input required placeholder="Link" type="text" name="linkInput" id="linkInput" className={styles.roleInput} />
        </div>
        <div className="center">
          <input type="submit" className="main-button" value="Add Media" />
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