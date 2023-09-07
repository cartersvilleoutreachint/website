"use client"

import Pagination from "../../../Vendor/Pagination/Pagination"
import {useEffect, useState} from "react"
import styles from "./blog.module.css"
import ArticleBox from "../../../ArticleBox/ArticleBox"
import getBlogsMeta from "@/app/controllers/blog/getBlogsMeta"

interface blogPropsType{
    search: string
}

export default function BlogList(props: blogPropsType) {

    const [blogData, setBlogData] = useState([])

    useEffect(()=>{
        const searchStr = (props.search == "default") ? "" : `/${props.search}`
        getData()
        async function getData(){
            const fetchBlogData = await getBlogsMeta(searchStr);
            setBlogData(fetchBlogData.data)
        }
    }, [props.search])
    

const posts = blogData.map((data: any, i)=>{
    return <ArticleBox key={i} {...data} />
})
const [pagedItems, setPagedItems] = useState(<></>);
    

  return (
    <div className={`center ${styles.blogList}`}>
        {pagedItems}
       
  <Pagination
        reload={blogData}
        items={posts}
        setPagedItems={setPagedItems}
        showAmt={4}
        itemsPerPage={6}
    /> 
    </div>
  )
}
