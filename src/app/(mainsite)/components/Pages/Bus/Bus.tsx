import ImageCarousel from "../../Misc/ImageCarousel/ImageCarousel"
import PageBanner from "../../Misc/PageBanner/PageBanner"
import styles from "../../Misc/pagewcarousel.module.css"
import Image from "next/image"

export default function Bus() {
  return (
    <>
    <PageBanner imgSrc="/img/gallery/1.webp" pageTitle="Bus Travel Ministry"/>
    {/* PHOTOS */}
    <section className={styles.donateSection}>

       {/* PHOTOS */}
       <ImageCarousel imgs={[
        "/img/carousel/bus/1.webp",
        "/img/carousel/bus/2.webp",
        "/img/carousel/bus/3.webp",
        "/img/carousel/bus/4.webp",
        "/img/carousel/bus/5.webp",
        "/img/carousel/bus/6.webp",
        "/img/carousel/bus/7.webp",
        "/img/carousel/bus/8.webp",
        "/img/carousel/bus/9.webp",
        "/img/carousel/bus/10.webp",
        "/img/carousel/bus/11.webp",
        "/img/carousel/bus/12.webp",
        "/img/carousel/bus/13.webp",
        "/img/carousel/bus/14.webp",
        "/img/carousel/bus/15.webp",
        "/img/carousel/bus/16.webp",
        "/img/carousel/bus/17.webp",
        "/img/carousel/bus/18.webp",
        "/img/carousel/bus/19.webp",
      ]} />
        <div className={styles.content}>
            <span>“Only ask, and I will give you the nations as your inheritance, the whole earth as your possession.” - Psalms 2:8</span>
            <p>As we travel both locally and across the nation, our 29-passenger bus allows us to share the Gospel and serve wherever God opens a door—from churches and transitional centers to universities and communities in need.</p>
            <span>“I know your works. See, I have set before you an open door, and no one can shut it; for you have a little strength, have kept My word, and have not denied My name.” - Revelation 3:8</span>
        </div>
        {/* <Image className={styles.bgImg} src="/img/donate-bg.jpg" width={1280} height={720} alt="Image of a church" /> */}
        
    </section>
    
    </>
  )
}
