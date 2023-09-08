"use client"

import styles from "./teammembers.module.css"
import TeamMember from "./TeamMember"
import getTeam from "@/app/controllers/team/getTeam"
import { useEffect, useState } from "react"
import Loading from "../../../Misc/Loading/Loading"

export default function TeamMembers() {

  const [isLoading, setIsLoading] = useState(true)
  const [teamData, setTeamData] = useState([])

    const teamMemberElems = teamData.map((data:any, i)=>{
        return <TeamMember key={i} {...data} />
    })

    useEffect(()=>{
      getData()
      async function getData(){
        const fetchTeamData = await getTeam()
        setTeamData(fetchTeamData.data)
        setIsLoading(false)
      }
    }, [])

  return (
    <section className={`center ${styles.teamMembersSection}`}>
        <div className={styles.teamMembersWrapper}>
          {(isLoading) && <Loading />}
            {teamMemberElems}
        </div>  
    </section>
  )
}
