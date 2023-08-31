import Events from "../../components/Pages/Events/Events/Events"

export default function EventsPage({params}: {params:{search: string}}) {
    return (
     <Events search={params.search} />
    )
  }