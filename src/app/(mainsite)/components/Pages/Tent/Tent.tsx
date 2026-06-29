import ImageCarousel from "../../Misc/ImageCarousel/ImageCarousel"
import PageBanner from "../../Misc/PageBanner/PageBanner"
import styles from "../../Misc/pagewcarousel.module.css"
import Image from "next/image"

export default function Tent() {
  return (
    <>
    <PageBanner imgSrc="/img/main-bg.jpg" pageTitle="Tent Revivals"/>
    <section className={styles.donateSection}>

      {/* PHOTOS */}
       <ImageCarousel imgs={[
        "/img/carousel/tent/1.webp",
        "/img/carousel/tent/2.webp",
        "/img/carousel/tent/3.webp",
        "/img/carousel/tent/1.webp",
        "/img/carousel/tent/2.webp",
        "/img/carousel/tent/3.webp",
        "/img/carousel/tent/1.webp",
        "/img/carousel/tent/2.webp",
        "/img/carousel/tent/3.webp",
      ]} />
        <div className={styles.content}>
          
            <br /><br />
            <span>“Then the master said to the servant, ‘Go out into the highways and hedges, and compel them to come in, that my house may be filled.” - Luke 14:23</span>
            <p>The Lord recently placed a burden on our hearts to host tent revivals in our local community. What began as an act of obedience has grown into a monthly gathering, bringing together local churches as co-hosts and allowing us to witness God unite the Body of Christ in both unity and power. Through sound doctrine and the faithful teaching of God’s Word, these revival events provide opportunities for evangelism, water baptisms, infillings of the Holy Spirit, and prayer ministry that leads to freedom and restoration. We believe God changes lives, breaks chains, and empowers people to fulfill the calling He has placed on them.</p>
            <span>“Behold, how good and how pleasant it is For brethren to dwell together in unity!” - Psalms 133:1</span>
        </div>
        {/* <Image className={styles.bgImg} src="/img/donate-bg.jpg" width={1280} height={720} alt="Image of a church" /> */}
        
    </section>
    
    </>
  )
}
