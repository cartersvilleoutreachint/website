export default async function getBlog(blogId: string){
    try{
        const fetchData = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/api/blog/${blogId}`, {
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