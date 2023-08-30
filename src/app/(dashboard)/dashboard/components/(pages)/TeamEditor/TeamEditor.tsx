import styles from "./teameditor.module.css"
import getTeamMembers from "@/app/(mainsite)/components/Pages/OurTeam/TeamMembers/getTeamMembers"
import TeamMemberEditor from "./TeamMemberEditor"

export default function TeamEditor() {

    const teamElems = getTeamMembers().map((data, i)=>{
        return <TeamMemberEditor key={i} {...data} />
    })

  return (
    <div className="center">
        <div className={styles.wrapper}>
            <button className={styles.addButton}>+</button>
            {teamElems}
        </div>
    </div>
  )
}
