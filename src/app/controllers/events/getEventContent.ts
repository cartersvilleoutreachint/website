export default async function getEventContent(eventId: string){
    try{
        const fetchData = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/api/eventcontent/${eventId}`, {
            method: "GET"
        })

        const results = await fetchData.json()
        return results
    
    }catch(err){
        console.error(err)
        return Promise.reject()
    }
}