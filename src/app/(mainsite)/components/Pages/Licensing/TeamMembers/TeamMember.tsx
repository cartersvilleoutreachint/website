import styles from "./teammembers.module.css"
import Image from "next/image"



export default function TeamMember(props: teamMemberType) {
  return (
    <aside className={styles.teamMember}>
        <Image className={styles.img} src={props.imgSrc} width={100} height={100} alt="Team member photo" />
        <h3 className={styles.name}>{props.name}</h3>
        <div className={styles.role}>{props.role}</div>
        <p className={styles.description}>{props.description}</p>
    </aside>
  )
}
