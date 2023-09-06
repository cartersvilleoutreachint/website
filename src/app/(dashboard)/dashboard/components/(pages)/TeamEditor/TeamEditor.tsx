"use client"

import styles from "../../editor.module.css"
import getTeam from "@/app/controllers/team/getTeam"
import TeamMemberEditor from "./TeamMemberEditor"
import AddTeamMemberForm from "./AddTeamMemberForm/AddTeamMemberForm"
import { useState, useEffect } from "react"

export default function TeamEditor() {

  const [reloadPage, setReloadPage] = useState(false)
  const [teamData, setTeamData] = useState([])

  interface teamDataType extends teamMemberType{
    _id: string
  }

    const teamElems = teamData.map((data: teamDataType)=>{
        return <TeamMemberEditor setReloadPage={setReloadPage} key={Math.floor(Math.random() * 9999999)} {...data} />
    })

    function openForm(){
      document.getElementById("formShader")!.style.pointerEvents = "all"
      document.getElementById("formShader")!.style.opacity = "1";
      document.getElementById("formWrapper")!.style.pointerEvents = "all";
      document.getElementById("formWrapper")!.style.opacity = "1";
      document.getElementById("formWrapper")!.style.transform = "translateY(0)";
    }

    async function getData(){
      const fetchTeamData = await getTeam();
      setTeamData(fetchTeamData.data)
    }
  
    useEffect(()=>{
      getData()
      
    }, [reloadPage])
    

  return (
    <div className="center">
        <div className={styles.wrapper}>
            <AddTeamMemberForm setReloadPage={setReloadPage} />
            <button onClick={openForm} className={styles.addButton}>+</button>
            {teamElems}
        </div>
    </div>
  )
}
