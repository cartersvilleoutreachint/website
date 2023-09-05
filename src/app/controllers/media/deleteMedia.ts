export default async function deleteMedia(mediaId: string){
    if(confirm("Are you sure you want to delete this media?")){
        try{
            await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/api/media/${mediaId}`, {
                method: "DELETE"
            })
            return Promise.resolve()
        }catch(err){
            console.error(err)
            return Promise.reject(err)
        }
    }
}