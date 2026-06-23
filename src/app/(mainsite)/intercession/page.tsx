import { Metadata } from "next";
import Donate from "../components/Pages/Donate/Donate";
import Intercession from "../components/Pages/Intercession/Intercession";

export const metadata: Metadata = {
    title: "Intercession",
    description: "Cartersville Outreach International | Intercession"
}

export default function BusTravel() {
  return (
    <main id="donatePage">
      <Intercession />
    </main>
  )
}
