import styles from "./loading.module.css"
import Lottie from "react-lottie-player/dist/LottiePlayerLight"
import animationData from "./loading_anim.json"
export default function Loading() {
  return (
    <div className={styles.loadingWrapper}>
      <div className={styles.animWrapper}>
      <Lottie
      animationData={animationData}
      play
      loop
      />
      </div>
    </div>
  )
}
