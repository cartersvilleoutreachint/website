import styles from "./footertag.module.css"

export default function FooterTag() {
  return (
    <div className={styles.tag}>Designed with <img src={"/img/heart.svg"} aria-hidden /> by <a href="https://www.romedigital.co" target="_blank">Rome Digital</a></div>
  )
}
