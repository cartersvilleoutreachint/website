import styles from "./articlebox.module.css"
import Image from "next/image"
import Link from "next/link"
import getSlashedDate from "../utils/getSlashedDate"

interface articleBoxPropType{
  
  metadata:{
    imgSrc: string,
    title: string,
    date: number,
    url: string,
  }
}

export default function ArticleBox(props: articleBoxPropType) {
  return (
    <aside className={styles.articleBox}>
      <Image className={styles.mainImg} src={props.metadata.imgSrc} width={400} height={250} alt="Main Blog Image" />
      <h4 className={styles.title}>{props.metadata.title}</h4>
      <div className={styles.dateWrapper}>
        <div>{getSlashedDate(props.metadata.date)}</div>
      </div>
      <div className="center">
        <Link className={`main-button ${styles.readArticle}`} href={(props.metadata.url)}>Read Article</Link>
      </div>
    </aside>
  )
}
