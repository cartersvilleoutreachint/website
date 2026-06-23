import { Metadata } from "next";
import Donate from "../components/Pages/Donate/Donate";
import Baptisms from "../components/Pages/Baptisms/Baptisms";

export const metadata: Metadata = {
    title: "Water Baptisms",
    description: "Cartersville Outreach International | Water Baptisms"
}

export default function WaterBaptism() {
  return (
    <main id="donatePage">
      <Baptisms />
    </main>
  )
}
