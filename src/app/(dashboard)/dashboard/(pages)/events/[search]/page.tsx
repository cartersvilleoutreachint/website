import DashboardEvents from "../../../components/(pages)/Events/DashboardEvents"

export default function DashboardEventsPage({params}: {params:{search: string}}) {
    return (
      <>
        <DashboardEvents search={params.search} />
      </>
    )
  }