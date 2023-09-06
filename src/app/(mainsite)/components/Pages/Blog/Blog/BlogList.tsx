"use client"

import Pagination from "../../../Vendor/Pagination/Pagination"
import {useState} from "react"
import styles from "./blog.module.css"
import ArticleBox from "../../../ArticleBox/ArticleBox"

interface blogPropsType{
    search: string
}

export default function BlogList(props: blogPropsType) {

    const [blogData, setBlogData] = useState([])
    
const posts = blogData.map((data: any, i)=>{
    return <ArticleBox key={i} {...data} />
})
const [reloadPage, setReloadPage] = useState("");
const [pagedItems, setPagedItems] = useState(<></>);

    if(props.search == "default"){
        // Default Data

    }else{
        // Search data

    }
    

  return (
    <div className={`center ${styles.blogList}`}>
        {pagedItems}
       
  <Pagination
        reload={reloadPage}
        items={posts}
        setPagedItems={setPagedItems}
        showAmt={4}
        itemsPerPage={6}
    /> 
    </div>
  )
}
