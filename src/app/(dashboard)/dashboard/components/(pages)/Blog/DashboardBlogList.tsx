"use client"

import BlogEditor from "./BlogEditor/BlogEditor"
import Loading from "@/app/(mainsite)/components/Misc/Loading/Loading"
import EditArticleBox from "./EditArticleBox"
import styles2 from "@/app/(mainsite)/components/Pages/Blog/Blog/blog.module.css"
import styles from "./dashboardblog.module.css"
import styles3 from "../../editor.module.css"
import { useState, useEffect } from "react"
import Pagination from "@/app/(mainsite)/components/Vendor/Pagination/Pagination"

export default function DashboardBlogList(props: {search: string}) {

    const [pagedItems, setPagedItems] = useState(<></>);
    const [blogData, setBlogData] = useState([]);
    const [currentSearch, setCurrentSearch] = useState("");
    const [currentBlogId, setCurrentBlogId] = useState("");
    const [reloadPage, setReloadPage] = useState(false)

    const posts = blogData.map((data: any, i: number)=>{
        return <EditArticleBox key={i} {...data.metadata} setReloadPage={setReloadPage} setCurrentBlogId={setCurrentBlogId} id={data._id} />
    })


    function openForm(){
        document.getElementById("formShader")!.style.pointerEvents = "auto"
        document.getElementById("formShader")!.style.opacity = "1";
        document.getElementById("formWrapper")!.style.pointerEvents = "auto";
        document.getElementById("formWrapper")!.style.opacity = "1";
        document.getElementById("formWrapper")!.style.transform = "translateY(0)";
      }

      // FETCH DATA
    useEffect(()=>{
        let searchString = ""
        if(!(props.search == "default" || props.search == "")){
            // Default Data
            searchString = "/" + encodeURIComponent(props.search)
        }

        getData()
        async function getData(){
            const blogfetchData = await fetch(`http://localhost:3000/api/blogmeta${searchString}`)
            const blogData = await blogfetchData.json();
            setBlogData(blogData.data)
        }
    }, [reloadPage])
    
  return (
    <>
    <div className="center">
        <button onClick={()=>{openForm(); setCurrentBlogId("");}} className={styles3.addButton}>+</button>
        </div>
  <div className={`center ${styles2.blogList} ${styles.blogList}`}>
    {(blogData.length == 0)&& <Loading />}
    <BlogEditor setReloadPage={setReloadPage} currentBlogId={currentBlogId} />
    
        {pagedItems}
       
       <Pagination
             reload={blogData}
             items={posts}
             setPagedItems={setPagedItems}
             showAmt={4}
             itemsPerPage={6}
         /> 
  </div>
  </>
    )
}
