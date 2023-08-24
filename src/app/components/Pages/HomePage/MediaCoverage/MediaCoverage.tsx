"use client"

import getCarouselBreakpoints from "@/app/components/utils/getCarouselBreakpoints"
import styles from "./mediacoverage.module.css"
import getMedia from "./getMedia"
import MediaBox from "./MediaBox"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"

export default function MediaCoverage() {

    const mediaData = getMedia();
    const mediaDataElems = mediaData.map((data, i)=>{
        return <MediaBox key={i} {...data} />
    });
  return (
    <section className={styles.mediaCoverageSection}>
        <h2 className={styles.mediaHeading}>Media Coverage</h2>
        <Carousel
        responsive={getCarouselBreakpoints(
          1,2,3
        )}
        autoPlay={true}
        draggable={false}
        infinite={true}
        autoPlaySpeed={4000}
        >
            {mediaDataElems}
        </Carousel>

        
    </section>
  )
}
