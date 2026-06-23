import { Metadata } from "next";
import Donate from "../components/Pages/Donate/Donate";
import Bus from "../components/Pages/Bus/Bus";

export const metadata: Metadata = {
    title: "Bus Travel Minstry",
    description: "Cartersville Outreach International | Bus Travel Minstry"
}

export default function BusTravel() {
  return (
    <main id="donatePage">
      <Bus />
    </main>
  )
}
