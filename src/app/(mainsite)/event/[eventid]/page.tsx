import Event from "../../components/Pages/Event/Event"

export default function EventPage({params}: {params:{eventid: string}}) {
    return (
     <Event eventId={params.eventid} />
    )
  }