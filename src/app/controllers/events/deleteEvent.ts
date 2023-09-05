export default async function deleteEvent(eventId: string){
    if(confirm("Are you sure you want to delete this event?")){
        try{
            await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/api/event/${eventId}`, {
                method: "DELETE"
            })
            return Promise.resolve()
        }catch(err){
            console.error(err)
            return Promise.reject(err)
        }
    }
}