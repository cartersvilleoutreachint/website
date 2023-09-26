export default async function getEvents(search = ""){
    try{
        const fetchData = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/api/eventsmeta${search}`, {
            method: "GET",
            cache: "no-store"
        })

        const results = await fetchData.json()
        return results
    
    }catch(err){
        console.error(err)
        return Promise.reject()
    }
}