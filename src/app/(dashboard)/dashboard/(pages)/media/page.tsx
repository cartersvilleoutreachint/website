import { Metadata } from "next";
import MediaEditors from "../../components/(pages)/MediaEditor/MediaEditors";

export const metadata: Metadata = {
    title: "Dashboard | Media"
}

export default function DashboardMediaPage(){
    return(
        <>
         <h1 id="dashboardPageTitle">Media</h1>
         <MediaEditors />
        </>
    )
}