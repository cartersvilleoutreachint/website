import styles from "./dashboardoptions.module.css"
import DashboardOption from "./DashboardOption"

export default function DashboardOptions() {
  return (
    <>
        <h1 className={styles.pageTitle}>Admin Panel</h1>
        <div className="center">
            <div className={styles.optionsWrapper}>
                <DashboardOption
                title="Blog"
                url="/dashboard/blog"
                imgSrc="/img/blog-icon.svg"
                />
                <DashboardOption
                title="Team"
                url="/dashboard/team"
                imgSrc="/img/team-icon.svg"
                />
                <DashboardOption
                title="Media"
                url="/dashboard/media"
                imgSrc="/img/media-icon.svg"
                />
                <DashboardOption
                title="Events"
                url="/dashboard/events"
                imgSrc="/img/date-icon.svg"
                />
            </div>
        </div>
    </>
  )
}
