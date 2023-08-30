import TeamEditor from "../../components/(pages)/TeamEditor/TeamEditor";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Dashboard | Team"
}

export default function DashboardTeamPage(){
    return(
        <>
            <h1 id="dashboardPageTitle">Team</h1>
            <TeamEditor />
        </>
    )
}