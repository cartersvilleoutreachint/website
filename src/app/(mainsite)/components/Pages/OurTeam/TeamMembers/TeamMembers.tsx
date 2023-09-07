"use client"

import styles from "./teammembers.module.css"
import TeamMember from "./TeamMember"
import getTeam from "@/app/controllers/team/getTeam"
import { useEffect, useState } from "react"

export default function TeamMembers() {

  const [teamData, setTeamData] = useState([])

    const teamMemberElems = teamData.map((data:any, i)=>{
        return <TeamMember key={i} {...data} />
    })

    useEffect(()=>{
      getData()
      async function getData(){
        const fetchTeamData = await getTeam()
        setTeamData(fetchTeamData.data)
      }
    }, [])

  return (
    <section className={`center ${styles.teamMembersSection}`}>
        <div className={styles.teamMembersWrapper}>
            {teamMemberElems}
        </div>  
    </section>
  )
}
