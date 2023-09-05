export default async function updateEvent(eventId: string, data: updateEventType){
        try{
            await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/api/event/${eventId}`, {
                method: "PUT",
                body: JSON.stringify(data)
            })
            return Promise.resolve()
        }catch(err){
            console.error(err)
            return Promise.reject(err)
        }
}