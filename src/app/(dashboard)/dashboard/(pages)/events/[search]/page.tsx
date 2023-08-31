import { Suspense } from "react"
import Loading from "@/app/(mainsite)/components/Misc/Loading/Loading"
import DashboardEvents from "../../../components/(pages)/Events/DashboardEvents"

export default function DashboardEventsPage({params}: {params:{search: string}}) {
    return (
      <>
      <Suspense fallback={<Loading/>}>
        <DashboardEvents search={params.search} />
      </Suspense>
      </>
    )
  }