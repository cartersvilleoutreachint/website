import { Metadata } from "next";
import Donate from "../components/Pages/Donate/Donate";
import Licensing from "../components/Pages/Licensing/Licensing";

export const metadata: Metadata = {
    title: "Licensing",
    description: "Cartersville Outreach International | Licensing"
}

export default function BusTravel() {
  return (
    <main id="donatePage">
      <Licensing />
    </main>
  )
}
