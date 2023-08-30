"use client"

import styles from "./teameditor.module.css"
import getTeamMembers from "@/app/(mainsite)/components/Pages/OurTeam/TeamMembers/getTeamMembers"
import TeamMemberEditor from "./TeamMemberEditor"
import AddTeamMemberForm from "./AddTeamMemberForm/AddTeamMemberForm"

export default function TeamEditor() {

    const teamElems = getTeamMembers().map((data, i)=>{
        return <TeamMemberEditor key={i} {...data} />
    })

    function openForm(){
      document.getElementById("formShader")!.style.pointerEvents = "all"
      document.getElementById("formShader")!.style.opacity = "1";
      document.getElementById("formWrapper")!.style.pointerEvents = "all";
      document.getElementById("formWrapper")!.style.opacity = "1";
      document.getElementById("formWrapper")!.style.transform = "translateY(0)";
    }

  return (
    <div className="center">
        <div className={styles.wrapper}>
            <AddTeamMemberForm />
            <button onClick={openForm} className={styles.addButton}>+</button>
            {teamElems}
        </div>
    </div>
  )
}
