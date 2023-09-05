export default async function updateMedia(mediaId: string, data: updateMediaType){
    try{
        await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/api/media/${mediaId}`, {
            method: "PUT",
            body: JSON.stringify(data)
        })
        return Promise.resolve()
    }catch(err){
        console.error(err)
        return Promise.reject(err)
    }
}