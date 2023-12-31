"use client"

import getCarouselBreakpoints from "../../../utils/getCarouselBreakpoints"
import styles from "./mediacoverage.module.css"
import MediaBox from "./MediaBox"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import { useEffect, useState } from "react";
import getMedia from "@/app/controllers/media/getMedia";
import Loading from "../../../Misc/Loading/Loading";

export default function MediaCoverage() {

    const [mediaData, setMediaData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const mediaDataElems = mediaData.map((data: any, i)=>{
        return <MediaBox key={i} {...data} />
    });

    useEffect(()=>{
      getData()
      async function getData(){
        const fetchMediaData = await getMedia();
        setMediaData(fetchMediaData.data)
        setIsLoading(false)
      }
    }, [])
  return (
    <section className={styles.mediaCoverageSection}>
        <h2 className={styles.mediaHeading}>Media Coverage</h2>
        {(isLoading) && <Loading/>}
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
