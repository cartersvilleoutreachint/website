"use client"
import BlogEditor from "./BlogEditor/BlogEditor"
import testRecentArticlesData from "@/app/(mainsite)/components/Pages/HomePage/RecentArticles/testRecentArticlesData"
import EditArticleBox from "./EditArticleBox"
import styles2 from "@/app/(mainsite)/components/Pages/Blog/Blog/blog.module.css"
import styles from "./dashboardblog.module.css"
import styles3 from "../../editor.module.css"
import { useState } from "react"
import Pagination from "@/app/(mainsite)/components/Vendor/Pagination/Pagination"

export default function DashboardBlogList(props: {search: string}) {

    if(props.search == "default"){
        // Default Data

    }else{
        // Search data

    }

    const posts = testRecentArticlesData.map((data, i)=>{
        return <EditArticleBox key={i} {...data} />
    })
    const [reloadPage, setReloadPage] = useState("");
    const [pagedItems, setPagedItems] = useState(<></>);


    function openForm(){
        document.getElementById("formShader")!.style.pointerEvents = "auto"
        document.getElementById("formShader")!.style.opacity = "1";
        document.getElementById("formWrapper")!.style.pointerEvents = "auto";
        document.getElementById("formWrapper")!.style.opacity = "1";
        document.getElementById("formWrapper")!.style.transform = "translateY(0)";
      }
    
  return (
    <>
    <div className="center">
        <button onClick={openForm} className={styles3.addButton}>+</button>
        </div>
  <div className={`center ${styles2.blogList} ${styles.blogList}`}>
    <BlogEditor />
    
        {pagedItems}
       
       <Pagination
             reload={reloadPage}
             items={posts}
             setPagedItems={setPagedItems}
             showAmt={4}
             itemsPerPage={6}
         /> 
  </div>
  </>
    )
}
