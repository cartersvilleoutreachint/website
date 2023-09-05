export default async function createEvent(newEvent: newEventType){
    try{
        await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/api/events`, {
            method:"POST",
            body: JSON.stringify(newEvent)
        })
        return Promise.resolve()
    }catch(err){
        console.error(err)
        return Promise.reject(err)
    }
}