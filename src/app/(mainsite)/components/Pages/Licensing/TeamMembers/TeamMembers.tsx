"use client"

import styles from "./teammembers.module.css"
import TeamMember from "./TeamMember"
import teamData1 from "@/app/lib/teamData"
import teamData2 from "@/app/lib/teamData2"

export default function TeamMembers() {


    const teamMemberElems = teamData1.map((data:any, i)=>{
        return <TeamMember key={i} {...data} />
    })
    const teamMemberElems2 = teamData2.map((data:any, i)=>{
        return <TeamMember key={i} {...data} />
    })


  return (
    <section className={`center ${styles.teamMembersSection}`}>
        <br /><br /><br /><br />
        <h1>Ordained Ministers</h1>
        <br /><br />
        <div className={styles.teamMembersWrapper}>
            {teamMemberElems}
        </div> 
        <br /><br /><br />
        
         <h1>Licensed Ministers</h1>
        <br /><br />
        <div className={styles.teamMembersWrapper}>
            {teamMemberElems2}
        </div> 
    </section>
  )
}
