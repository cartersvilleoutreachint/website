import styles from "./makingimpact.module.css"
import Image from "next/image"

export default function MakingImpact() {
  return (
    <section className={styles.makingImpact}>
      <div className={styles.text}>“We want to make an impact for the kingdom of God, reaching souls wherever they may be.”</div>
      <Image className={styles.mainBg} src="/img/group-photo.png" width={1090} height={360} alt="Group Photo" />
      <div className={`shader ${styles.shader}`}></div>
    </section>
  )
}
