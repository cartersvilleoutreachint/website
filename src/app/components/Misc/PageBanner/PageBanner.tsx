import styles from "./pagebanner.module.css"
import Image from "next/image"

interface pageBannerPropType{
  imgSrc: string,
  pageTitle: string,
  styles?: Object
}

export default function PageBanner(props: pageBannerPropType) {
  return (
    <header className={styles.pageBanner}>
      <div className={styles.pageTitle}>{props.pageTitle}</div>
      <div className={`shader ${styles.shader}`}></div>
      <Image style={(props.styles != undefined) ? props.styles : {}} className={styles.pageBannerImg} src={props.imgSrc} alt="page title background image" width={1280} height={500}/>
    </header>
  )
}
