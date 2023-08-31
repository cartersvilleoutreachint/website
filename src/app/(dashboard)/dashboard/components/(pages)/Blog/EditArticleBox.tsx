import styles from "@/app/(mainsite)/components/ArticleBox/articlebox.module.css"
import styles2 from "./dashboardblog.module.css"
import Image from "next/image"
import getSlashedDate from "@/app/(mainsite)/components/utils/getSlashedDate"


export default function EditArticleBox(props: blogType) {

  function openForm(){
    document.getElementById("formShader")!.style.pointerEvents = "auto"
    document.getElementById("formShader")!.style.opacity = "1";
    document.getElementById("formWrapper")!.style.pointerEvents = "auto";
    document.getElementById("formWrapper")!.style.opacity = "1";
    document.getElementById("formWrapper")!.style.transform = "translateY(0)";
  }

  function handleEditClick(){
    openForm()
  }

  return (
    <aside className={`${styles.articleBox} ${styles2.articleBox}`}>
      <Image className={styles.mainImg} src={props.imgSrc} width={400} height={250} alt="Main Blog Image" />
      <h4 className={styles.title}>{props.title}</h4>
      <div className={styles.dateWrapper}>
        <div>{getSlashedDate(props.date)}</div>
      </div>
      <div className="center">
        <button onClick={handleEditClick} className={`${styles2.editButton} main-button`}>Edit</button>
        <button className={`${styles2.deleteButton} main-button`}>Delete</button>
      </div>
    </aside>
  )
}
