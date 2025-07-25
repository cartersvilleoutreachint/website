import styles from "./comingsoon.module.css"

export default function Tent() {
  return (
    <div className={styles.comingSoon}>
      <div className="center">
      <iframe className={styles.iframe} src="https://www.youtube.com/embed/p8iEFYb8dyg?si=REGlyZlSaXtDC7gA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
    </div>
  )
}
