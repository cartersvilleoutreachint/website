import styles from "../../editor.module.css"
import styles2 from "./mediaeditor.module.css"
import Image from "next/image"

export default function MediaEditor(props: mediaType) {
  return (
    <aside className={styles.teamMemberEditor}>
    <div className="dashboard-reorder">
        <button className="dashboard-reorder-up"></button>
        <button className="dashboard-reorder-down"></button>
    </div>

    <div className={styles.profileWrapper}>
        <Image className={`${styles.profileImg} ${styles2.coverImg}`} height={100} width={200} src={props.imageSrc} alt="Profile Image" />
        <div className={styles.profileTitle}>Cover Photo</div>
        <label htmlFor="photoInput" className={styles.photoInput}>Choose File</label>
        <input type="file" name="photoInput" id="photoInput" style={{display: "none"}}  />
    </div>

    <div className={styles.inputWrapper}>
        <input defaultValue={props.link} placeholder="Link" type="text" name="linkInput" id="linkInput" className={styles.nameInput} />
        <input defaultValue={props.title} placeholder="Title" type="text" name="titleInput" id="titleInput" className={styles.roleInput} />
    </div>

    <button className={styles.deleteButton}></button>
</aside>
  )
}
