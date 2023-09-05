export default async function createBlog(newBlog: newBlogType){
    try{
        await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/api/blog`, {
            method:"POST",
            body: JSON.stringify(newBlog)
        })
        return Promise.resolve()
    }catch(err){
        console.error(err)
        return Promise.reject(err)
    }
}