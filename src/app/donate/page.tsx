import { Metadata } from "next";
import Donate from "../components/Pages/Donate/Donate";

export const metadata: Metadata = {
    title: "Donate",
    description: "Cartersville Outreach International Donations"
}

export default function DonatePage() {
  return (
    <main id="donatePage">
      <Donate />
    </main>
  )
}
