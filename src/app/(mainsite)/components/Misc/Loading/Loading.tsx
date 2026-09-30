"use client"
import styles from "./loading.module.css"
import dynamic from "next/dynamic"
import animationData from "./loading_anim.json"
export default function Loading() {
  const Lottie = dynamic(() => import('react-lottie-player/dist/LottiePlayerLight'), {
  ssr: false, // Optional: Disable server-side rendering if it's client-only
})
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
