import PageBanner from "../../Misc/PageBanner/PageBanner"
import styles from "./donate.module.css"
import Image from "next/image"
import TeamMembers from "./TeamMembers/TeamMembers"

export default function Licensing() {
  return (
    <>
    <PageBanner imgSrc="/img/main-bg.jpg" pageTitle="Licensing and Ordination"/>
   
    <section className={styles.donateSection}>
      
      {/* PHOTOS */}
        <div>
           <br /><br />
    <img src="/img/carousel/licensing/main.webp" style={{width: "80%"}} />
    <br /><br />
           
            <br /><br />
            <span>“Your duty is to teach them to embrace a lifestyle that is consistent with sound doctrine.” - Titus 2:1</span>
            <p>Throughout the years, we have licensed and ordained men and women whom the Lord has raised up through our ministry to impact the nations with the Gospel. As they demonstrate a life of holiness, biblical integrity, and sound doctrine, they are commissioned to carry the Name of Jesus and represent the vision and support of our ministry wherever God leads them.</p>
             <TeamMembers />
            <span>“By this My Father is glorified, that you bear much fruit; so you will be My disciples.” - John 15:8</span>
        </div>
        {/* <Image className={styles.bgImg} src="/img/donate-bg.jpg" width={1280} height={720} alt="Image of a church" /> */}
        
    </section>
    
    </>
  )
}
