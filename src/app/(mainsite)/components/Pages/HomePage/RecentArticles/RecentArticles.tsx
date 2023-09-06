"use client"

import getCarouselBreakpoints from "../../../utils/getCarouselBreakpoints"
import getRecentBlogs from "@/app/controllers/blog/getRecentBlogs"
import styles from "./recentarticles.module.css"
import Carousel from "react-multi-carousel"
import ArticleBox from "../../../ArticleBox/ArticleBox"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function RecentArticles() {

    const [blogData, setBlogData] = useState([]);

      const recentArticleElems = blogData.map((data: any, i)=>{
        return(
          <ArticleBox key={i} {...data} />
        )
      })

      useEffect(()=>{
        getData()
        async function getData(){
          const fetchBlogData = await getRecentBlogs();
          setBlogData(fetchBlogData.data)
        }
      }, [])

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
