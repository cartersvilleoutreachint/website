import { Suspense } from "react"
import Loading from "@/app/(mainsite)/components/Misc/Loading/Loading"
import DashboardBlogList from "../../../components/(pages)/Blog/DashboardBlogList"

export default function DashboardBlogPage({params}: {params:{search: string}}) {
    return (
      <>
      <Suspense fallback={<Loading/>}>
          <DashboardBlogList search={params.search} />
      </Suspense>
      </>
    )
  }