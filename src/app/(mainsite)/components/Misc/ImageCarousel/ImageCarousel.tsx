"use client"
import styles from "./pastwork.module.css"
import { Swiper, SwiperSlide } from "swiper/react"

import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import { useRef } from "react"

export default function ImageCarousel(props: {imgs: string[]}) {

  const swiperRef: any = useRef()

  const slideElems = props.imgs.map((imgSrc, i)=>{
    return(
      <SwiperSlide key={i} className="center">
        <img src={imgSrc} alt="Portfolio Image" className={styles.img} />
      </SwiperSlide>
    )
  })


  return (


        <div className={styles.carouselWrapper}>
          <Swiper
          loopAdditionalSlides={2}
          ref={swiperRef}
          modules={[EffectCoverflow, Autoplay]}
          effect={'coverflow'}
          slidesPerView={3}
          autoplay={{delay: 2500}}
          breakpoints={{
            0: {
              slidesPerView: "auto"
            },
            649: {
              slidesPerView: 2,
            },
            990: {
              slidesPerView: 2,
            }
           }}
          centeredSlides
          loop
          initialSlide={1}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          >
            {slideElems}
          </Swiper>
        </div>
     

  )
}
