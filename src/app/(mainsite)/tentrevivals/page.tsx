import { Metadata } from "next";
import Donate from "../components/Pages/Donate/Donate";
import Tent from "../components/Pages/Tent/Tent";

export const metadata: Metadata = {
    title: "Tent Revivals",
    description: "Cartersville Outreach International | Tent Revivals"
}

export default function BusTravel() {
  return (
    <main id="donatePage">
      <Tent />
    </main>
  )
}
