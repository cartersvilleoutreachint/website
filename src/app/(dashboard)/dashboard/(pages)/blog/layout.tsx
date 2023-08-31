import { Metadata } from "next"
import SearchBar from "@/app/(mainsite)/components/Misc/SearchBar/SearchBar"

export const metadata: Metadata = {
  title: "Dashboard | Blog"
}

export default function EventsLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        
      <>
        <h1 id="dashboardPageTitle">Blog</h1>
        <SearchBar targetPageUrl="/dashboard/blog" />
        {children}
      </>
       

      
    )
  }