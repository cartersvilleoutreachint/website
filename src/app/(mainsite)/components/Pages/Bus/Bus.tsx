import PageBanner from "../../Misc/PageBanner/PageBanner"
import styles from "./donate.module.css"
import Image from "next/image"

export default function Bus() {
  return (
    <>
    <PageBanner imgSrc="/img/gallery/1.webp" pageTitle="Bus Travel Ministry"/>
    {/* PHOTOS */}
    <div className={styles.Images}>
      <br /><br />
      <script src="https://cdn.commoninja.com/sdk/latest/commonninja.js" defer></script>
<div className="commonninja_component pid-1c3561a7-20d7-4d82-a4c4-2cdee2c397c4"></div>
    </div>
    <section className={styles.donateSection}>

      
        <div>
            <span>“Only ask, and I will give you the nations as your inheritance, the whole earth as your possession.” - Psalms 2:8</span>
            <p>As we travel both locally and across the nation, our 29-passenger bus allows us to share the Gospel and serve wherever God opens a door—from churches and transitional centers to universities and communities in need.</p>
            <span>“I know your works. See, I have set before you an open door, and no one can shut it; for you have a little strength, have kept My word, and have not denied My name.” - Revelation 3:8</span>
        </div>
        {/* <Image className={styles.bgImg} src="/img/donate-bg.jpg" width={1280} height={720} alt="Image of a church" /> */}
        
    </section>
    
    </>
  )
}
