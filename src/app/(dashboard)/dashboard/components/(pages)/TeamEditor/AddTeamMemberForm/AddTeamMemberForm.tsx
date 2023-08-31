"use client"

import { useState, useRef } from "react";
import styles from "./addteammemberform.module.css"
import styles2 from "../teameditor.module.css"
import Image from "next/image";

export default function AddTeamMemberForm() {

  const [currentImg, setCurrentImg] = useState("/img/blank-profile.jpg");
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
            <Image className={styles.profileImg} height={100} width={100} src={currentImg} alt="Profile Image" />
            <div className={styles.profileTitle}>Profile Photo</div>
            <label htmlFor="photoInput" className={styles2.photoInput}>Choose File</label>
            <input type="file" name="photoInput" id="photoInput" style={{display: "none"}}  />
        </div>

        <div className={styles.inputWrapper}>
            <input required placeholder="Name" type="text" name="nameInput" id="nameInput" className={styles.nameInput} />
            <input required placeholder="Role" type="text" name="roleInput" id="roleInput" className={styles.roleInput} />
            <textarea required placeholder="Description" name="descInput" id="descInput" className={styles.descInput}></textarea>
        </div>
        <div className="center">
          <input type="submit" className="main-button" value="Add Member" />
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