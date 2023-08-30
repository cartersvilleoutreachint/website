import type { Metadata } from 'next'
import DashboardNav from './components/DashboardNav/DashboardNav'

export const metadata: Metadata = {
  title: 'Dashboard | COI',
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
        {children}
    </>
  )
}