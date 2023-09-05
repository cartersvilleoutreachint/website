export default async function updateBlog(blogId: string, data: updateBlogType){
        try{
            await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/api/blog/${blogId}`, {
                method: "PUT",
                body: JSON.stringify(data)
            })
            return Promise.resolve()
        }catch(err){
            console.error(err)
            return Promise.reject(err)
        }
}