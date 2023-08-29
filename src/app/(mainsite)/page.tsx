import HomePageHeader from "./components/Pages/HomePage/Header/HomePageHeader"
import MediaCoverage from "./components/Pages/HomePage/MediaCoverage/MediaCoverage"
import JailMinistry from "./components/Pages/HomePage/JailMinistry/JailMinistry"
import UpcomingEvents from "./components/Pages/HomePage/UpcomingEvents/UpcomingEvents"
import MakingImpact from "./components/Pages/HomePage/MakingImpact/MakingImpact"
import RecentArticles from "./components/Pages/HomePage/RecentArticles/RecentArticles"

export default function Home() {
  return (
    <main id="homePage">
      <HomePageHeader />
      <MediaCoverage />
      <JailMinistry />
      <UpcomingEvents />
      <MakingImpact />
      <RecentArticles />
    </main>
  )
}
