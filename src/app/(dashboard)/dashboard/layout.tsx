import type { Metadata } from 'next'
import "./dashboard.css"
import DashboardNav from './components/DashboardNav/DashboardNav'
import styles from "./dashboard.module.css"

export const metadata: Metadata = {
  title: 'Dashboard | Home',
  description: 'Admin Dashboard',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
        <DashboardNav />
        <main className={styles.dashboardContainer}>
          {children}
        </main>
    </>
  )
}