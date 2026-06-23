import PageBanner from "../../Misc/PageBanner/PageBanner"
import styles from "./donate.module.css"
import Image from "next/image"

export default function Intercession() {
  return (
    <>
    <PageBanner imgSrc="/img/main-bg.jpg" pageTitle="Intercession"/>
    <section className={styles.donateSection}>

      {/* PHOTOS */}
        <div>
          
            <br /><br />
            <span>“So I sought for a man among them who would make a wall, and stand in the gap before Me on behalf of the land, that I should not destroy it; but I found no one.” - Ezekiel 22:30</span>
            <p>As a ministry, we have come to know the importance of prayer, and the Lord has brought together a team of intercessors who continually lift up specific requests as well as seek His guidance, protection, and presence to go before us wherever we go.</p>
            <span>“Pray without ceasing” - 1 Thessalonians 5:17</span>
        </div>
        {/* <Image className={styles.bgImg} src="/img/donate-bg.jpg" width={1280} height={720} alt="Image of a church" /> */}
        
    </section>
    
    </>
  )
}
