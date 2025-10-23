import { Metadata } from "next"
import PageBanner from "../components/Misc/PageBanner/PageBanner";
import SearchBar from "../components/Misc/SearchBar/SearchBar";

export const metadata: Metadata = {
    title: "Events",
    description: "Cartersville Outreach International Events"
}

export default function EventsLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        
        <main id="eventsPage">
        <PageBanner pageTitle="Events" imgSrc="/img/pagebanners/event.webp" />
        <SearchBar targetPageUrl="/events" />
        {children}
      </main>
       

      
    )
  }