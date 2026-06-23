import ImageCarousel from "../../Misc/ImageCarousel/ImageCarousel"
import PageBanner from "../../Misc/PageBanner/PageBanner"
import styles from "./donate.module.css"
import Image from "next/image"

export default function Evangelism() {
  return (
    <>
    <PageBanner imgSrc="/img/main-bg.jpg" pageTitle="Evangelism"/>
    <section className={styles.donateSection}>

       {/* PHOTOS */}
       <ImageCarousel imgs={[
        "/img/carousel/evang/1.webp",
        "/img/carousel/evang/2.webp",
        "/img/carousel/evang/3.webp",
        "/img/carousel/evang/4.webp",
        "/img/carousel/evang/5.webp",
        "/img/carousel/evang/6.webp",
        "/img/carousel/evang/7.webp",
        "/img/carousel/evang/8.webp",
      ]} />
        <div className={styles.content}>
          
            <br /><br />
            <span>“How then shall they call on Him in whom they have not believed? And how shall they believe in Him of whom they have not heard? And how shall they hear without a preacher? And how shall they preach unless they are sent?” - Romans 10:14</span>
            <p>God has shown us the dire need of an evangelism team as we minister to the nations. He has placed a holy burden on many of us, sending us out into the streets and public places to preach the gospel to the hardest, the darkest & the lost. Our team also trains other church congregations how to go out and win souls. May we continue to be an effective witness and bring Heaven to Earth. </p>
            <span>“I came to send fire on the earth, and how I wish it were already kindled!” - Luke 12:49</span>
        </div>
        {/* <Image className={styles.bgImg} src="/img/donate-bg.jpg" width={1280} height={720} alt="Image of a church" /> */}
        
    </section>
    
    </>
  )
}
