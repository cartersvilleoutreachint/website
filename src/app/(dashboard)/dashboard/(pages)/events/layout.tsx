import { Metadata } from "next"
import SearchBar from "@/app/(mainsite)/components/Misc/SearchBar/SearchBar"

export const metadata: Metadata = {
  title: "Dashboard | Events"
}

export default function EventsLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        
      <>
        <h1 id="dashboardPageTitle">Events</h1>
        <SearchBar targetPageUrl="/dashboard/events" />
        {children}
      </>
       

      
    )
  }