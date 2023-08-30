import styles from "./dashboardoptions.module.css"
import Link from "next/link"

interface optionsPropsType{
    title: string,
    imgSrc: string,
    url: string
}

export default function DashboardOption(props: optionsPropsType) {
  return (
    <Link href={props.url} className={styles.option}>
        <img className={styles.img} src={props.imgSrc} alt={`${props.title} Icon`} />
        <h3 className={styles.title}>{props.title}</h3>
    </Link>
  )
}
