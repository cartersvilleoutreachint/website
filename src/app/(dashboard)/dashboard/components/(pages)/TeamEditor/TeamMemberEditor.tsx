import styles from "../../editor.module.css"
import Image from "next/image"

export default function TeamMemberEditor(props: teamMemberType) {

  return (
    <aside className={styles.teamMemberEditor}>
        <div className="dashboard-reorder">
            <button className="dashboard-reorder-up"></button>
            <button className="dashboard-reorder-down"></button>
        </div>

        <div className={styles.profileWrapper}>
            <Image className={styles.profileImg} height={100} width={100} src={props.imgSrc} alt="Profile Image" />
            <div className={styles.profileTitle}>Profile Photo</div>
            <label htmlFor="photoInput" className={styles.photoInput}>Choose File</label>
            <input type="file" name="photoInput" id="photoInput" style={{display: "none"}}  />
        </div>

        <div className={styles.inputWrapper}>
            <input defaultValue={props.name} placeholder="Name" type="text" name="nameInput" id="nameInput" className={styles.nameInput} />
            <input defaultValue={props.role} placeholder="Role" type="text" name="roleInput" id="roleInput" className={styles.roleInput} />
            <textarea defaultValue={props.description} placeholder="Description" name="descInput" id="descInput" className={styles.descInput}></textarea>
        </div>

        <button className={styles.deleteButton}></button>
    </aside>
  )
}
