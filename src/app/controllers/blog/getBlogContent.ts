export default async function getBlogContent(blogId: string){
    try{
        const fetchData = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/api/blogcontent/${blogId}`, {
            method: "GET",
            next: {revalidate: 10000}
        })

        const results = await fetchData.json()
        return results
    
    }catch(err){
        console.error(err)
        return Promise.reject()
    }
}