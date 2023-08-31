import { Suspense } from "react"
import Loading from "@/app/(mainsite)/components/Misc/Loading/Loading"
import DashboardBlogList from "../../components/(pages)/Blog/DashboardBlogList"

export default function DashboardBlogPage(){
    return(
        <>
        <Suspense fallback={<Loading/>}>
            <DashboardBlogList search="default" />
        </Suspense>
        </>
    )
}