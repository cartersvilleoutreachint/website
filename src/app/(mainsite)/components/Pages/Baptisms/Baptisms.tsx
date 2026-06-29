import ImageCarousel from "../../Misc/ImageCarousel/ImageCarousel"
import PageBanner from "../../Misc/PageBanner/PageBanner"
import styles from "../../Misc/pagewcarousel.module.css"
import Image from "next/image"

export default function Baptisms() {
  return (
     <>
    <PageBanner imgSrc="/img/main-bg.jpg" pageTitle="Water Baptism"/>
    
    <section className={styles.donateSection}>

      {/* PHOTOS */}
       <ImageCarousel imgs={[
        "/img/carousel/baptism/1.webp",
        "/img/carousel/baptism/2.webp",
         "/img/carousel/baptism/3.webp",
          "/img/carousel/baptism/4.webp",
           "/img/carousel/baptism/5.webp",
         "/img/carousel/baptism/6.webp",
          "/img/carousel/baptism/7.webp",
           "/img/carousel/baptism/8.webp",
         "/img/carousel/baptism/9.webp",
          "/img/carousel/baptism/10.webp",
        
      ]} />
        <div className={styles.content}>
          
            <br /><br />
            <span>“Go therefore and make disciples of all the nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit,” - Matthew 28:19</span>
            <p>As we minister globally, we are seeing many come to Christ. As a public declaration of their newfound faith, many thru water baptism are allowing Jesus to wash them and make them new - fully surrendering their lives to serve Him.</p>
            <span>“Can anyone forbid water, that these should not be baptized who have received the Holy Spirit just as we have?” - Acts 10:47</span>
        </div>
        {/* <Image className={styles.bgImg} src="/img/donate-bg.jpg" width={1280} height={720} alt="Image of a church" /> */}
        
    </section>
    
    </>
  )
}
