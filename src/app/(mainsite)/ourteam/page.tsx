import { Metadata } from "next";
import PageBanner from "../components/Misc/PageBanner/PageBanner";
import TeamMembers from "../components/Pages/OurTeam/TeamMembers/TeamMembers";

export const metadata: Metadata = {
    title: "Our Team",
    description: "Cartersville Outreach International Team"
}

export default function OurTeamPage() {
  return (
    <main id="ourTeamPage">
      <PageBanner imgSrc="/img/main-bg.jpg" pageTitle="Our Team" />
      <TeamMembers />
    </main>
  )
}
