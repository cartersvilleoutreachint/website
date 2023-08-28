import { Metadata } from "next"
import PageBanner from "../components/Misc/PageBanner/PageBanner";
import SearchBar from "../components/Misc/SearchBar/SearchBar";

export const metadata: Metadata = {
    title: "Blog",
    description: "Cartersville Outreach International Blog"
}

export default function EventsLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        
        <main id="blogPage">
        <PageBanner pageTitle="Our Blog" imgSrc="/img/pagebanners/blog.jpg" />
        <SearchBar targetPageUrl="/blog" />
        {children}
      </main>
       

      
    )
  }