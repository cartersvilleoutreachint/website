import styles from "./teammembers.module.css"
import getTeamMembers from "./getTeamMembers"
import TeamMember from "./TeamMember"

export default function TeamMembers() {

    const teamMemberElems = getTeamMembers().map((data, i)=>{
        return <TeamMember key={i} {...data} />
    })

  return (
    <section className={`center ${styles.teamMembersSection}`}>
        <div className={styles.teamMembersWrapper}>
            {teamMemberElems}
        </div>  
    </section>
  )
}
