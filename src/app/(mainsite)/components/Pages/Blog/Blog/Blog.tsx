import styles from "./blog.module.css"
import {Suspense} from "react"
import BlogList from "./BlogList"
import Loading from "../../../Misc/Loading/Loading"

interface blogPropsType{
    search: string
}

export default function Blog(props: blogPropsType) {
  return (
    <section className={styles.eventsSection}>
        <Suspense fallback={<Loading/>}>
            <BlogList search={props.search} />
        </Suspense>
    </section>
  )
}
