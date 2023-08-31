import { Suspense } from "react"
import Loading from "@/app/(mainsite)/components/Misc/Loading/Loading"
import DashboardEvents from "../../components/(pages)/Events/DashboardEvents"

export default function DashboardEventsPage(){
    return(
        <>
        <Suspense fallback={<Loading/>}>
            <DashboardEvents search="default" />
        </Suspense>
        </>
    )
}