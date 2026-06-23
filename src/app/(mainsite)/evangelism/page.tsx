import { Metadata } from "next";
import Donate from "../components/Pages/Donate/Donate";
import Evangelism from "../components/Pages/Evangelism/Evangelism";

export const metadata: Metadata = {
    title: "Evangelism",
    description: "Cartersville Outreach International | Evangelism"
}

export default function BusTravel() {
  return (
    <main id="donatePage">
      <Evangelism />
    </main>
  )
}
