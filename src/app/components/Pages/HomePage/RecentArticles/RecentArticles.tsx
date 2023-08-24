"use client"

import getCarouselBreakpoints from "@/app/components/utils/getCarouselBreakpoints"
import getRecentArticleData from "./getRecentArticleData"
import styles from "./recentarticles.module.css"
import Carousel from "react-multi-carousel"
import ArticleBox from "@/app/components/ArticleBox/ArticleBox"
import Link from "next/link"

export default function RecentArticles() {

      const recentArticleElems = getRecentArticleData().map((data, i)=>{
        return(
          <ArticleBox key={i} {...data} />
        )
      })

  return (
    <section className={styles.recentArticles}>
        <h2 className={styles.recentArticlesTitle}>Recent Articles</h2>
        <Carousel
        responsive={getCarouselBreakpoints(1,2,3)}
        autoPlay={false}
        infinite={false}
        draggable={false}
        >
            {recentArticleElems}
        </Carousel>
        <div className={styles.moreArticles}>
          <Link className={styles.moreArticlesLink} href="/blog">More Articles</Link>
        </div>  
    </section>
  )
}
