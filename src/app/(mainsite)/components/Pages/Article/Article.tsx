"use client"
import { useEffect, useState } from "react"
import styles from "./article.module.css"
import getBlogContent from "@/app/controllers/blog/getBlogContent"
import getSlashedDate from "../../utils/getSlashedDate"
import Image from "next/image"
import Loading from "../../Misc/Loading/Loading"

export default function Article(props:{articleId: string}) {

    const [currentTitle, setCurrentTitle] = useState("");
    const [currentDate, setCurrentDate] = useState("")
    const [currentContent, setCurrentContent] = useState("")
    const [currentImg, setCurrentImg] = useState("/img/blank.png")
    const [isLoading, setIsLoading] = useState(true)
    const [hasContent, setHasContent] = useState(false)

    useEffect(()=>{
        getData()
        async function getData() {
            const fetchBlogData = await getBlogContent(props.articleId);
            if(fetchBlogData.data._id){
                setCurrentContent(fetchBlogData.data.content)
                setCurrentTitle(fetchBlogData.data.metadata.title)
                setCurrentDate(getSlashedDate(fetchBlogData.data.metadata.date))
                setCurrentImg(fetchBlogData.data.metadata.imgSrc)
                setHasContent(true)
            }
            setIsLoading(false)
        }
    }, [])

  return (
    <section className={styles.articleSection}>
        <article className={styles.articleContainer}>
            {(isLoading) && <Loading />}
            {(!isLoading && !hasContent) && <div className="noData">Invalid Post</div>}

        {(!isLoading && hasContent) && <><Image className={styles.coverImg} src={currentImg} width={1920} height={1080} alt="Article Cover Image"/>
            <h2 className={styles.title}>{currentTitle}</h2>
            <div className={styles.dateWrapper}>
                <img src="/img/date-icon.svg" alt="date-icon" />
                <span>{currentDate}</span>
            </div>
            {/* SHARE BUTTON */}

            <div className={styles.content} dangerouslySetInnerHTML={{"__html": currentContent}}>

            </div></>}
        </article>
    </section>
  )
}
