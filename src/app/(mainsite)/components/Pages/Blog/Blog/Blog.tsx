import styles from "./blog.module.css"
import BlogList from "./BlogList"

interface blogPropsType{
    search: string
}

export default function Blog(props: blogPropsType) {
  return (
    <section className={styles.eventsSection}>
            <BlogList search={props.search} />
    </section>
  )
}
