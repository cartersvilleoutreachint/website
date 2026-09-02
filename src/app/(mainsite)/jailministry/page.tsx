import { Metadata } from "next";
import Donate from "../components/Pages/Donate/Donate";
import Baptisms from "../components/Pages/Baptisms/Baptisms";
import Jail from "../components/Pages/Jail/Jail";

export const metadata: Metadata = {
    title: "Jail Ministry",
    description: "Cartersville Outreach International | Jail Ministry"
}

export default function JailMinistry() {
  return (
    <main id="donatePage">
      <Jail />
    </main>
  )
}
