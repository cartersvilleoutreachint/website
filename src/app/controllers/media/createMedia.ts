export default async function createMedia(data: mediaType){
    try{
        await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/api/media`, {
            method: "POST",
            body: JSON.stringify(data)
        })
        return Promise.resolve()
    }catch(err: any){
        console.error(err.message);
        return Promise.reject();
    }
}