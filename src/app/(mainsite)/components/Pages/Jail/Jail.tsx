import ImageCarousel from "../../Misc/ImageCarousel/ImageCarousel"
import PageBanner from "../../Misc/PageBanner/PageBanner"
import styles from "../../Misc/pagewcarousel.module.css"
import Image from "next/image"

export default function Jail() {
  return (
     <>
    <PageBanner imgSrc="/img/main-bg.jpg" pageTitle="Jail Ministry"/>
    
    <section className={styles.donateSection}>

      {/* PHOTOS */}
       <ImageCarousel imgs={[
        
           "/img/carousel/jailministry/5.webp",
           "/img/carousel/jailministry/8.webp",
         "/img/carousel/jailministry/9.webp",
          "/img/carousel/jailministry/11.webp",
          "/img/carousel/jailministry/12.webp",
          "/img/carousel/jailministry/13.webp",
          "/img/carousel/jailministry/14.webp",
          "/img/carousel/jailministry/15.webp",
          "/img/carousel/jailministry/16.webp",
          "/img/carousel/jailministry/17.webp",
          "/img/carousel/jailministry/1.webp",
        "/img/carousel/jailministry/2.webp",
         "/img/carousel/jailministry/3.webp",
          "/img/carousel/jailministry/4.webp",
        
      ]} />
        <div className={styles.content}>
          
            <br /><br />
            <p>As we minister in the Bartow County Jail to inmates, we not only work to help inmates overcome the challenges of incarceration, but also teach them how to have power over the devil by relying on their faith in God. No matter what someone has done, they can still be redeemed and change their lives through a relationship with Jesus Christ.</p>
        </div>
        {/* <Image className={styles.bgImg} src="/img/donate-bg.jpg" width={1280} height={720} alt="Image of a church" /> */}
        
    </section>
    
    </>
  )
}
