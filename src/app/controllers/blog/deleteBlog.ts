export default async function deleteBlog(blogId: string){
    if(confirm("Are you sure you want to delete this blog?")){
        try{
            await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/api/blog/${blogId}`, {
                method: "DELETE"
            })
            return Promise.resolve()
        }catch(err){
            console.error(err)
            return Promise.reject(err)
        }
    }
}