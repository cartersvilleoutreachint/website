import compressImage from "./compressimage";

async function fileUploadHandler(evt: any){
    try{
        const file = await compressImage(evt.target.files[0], {height: 720})
        const formData = new FormData();
        formData.append("image", file);
        const fetchData = await fetch("https://api.imgur.com/3/image", {
            method: "POST",
            headers: {
                /* ********  PUT IMGUR CLIENT ID HERE  ********* */
            "Authorization": `Client-ID ${process.env.NEXT_PUBLIC_IMGUR_CLIENT_ID}`
            },
            body: formData
        })

        const imgurData = await fetchData.json()
        return imgurData.data.link  
    }catch(err: any){
        return {"Error:": err.message}
    }
}

export default fileUploadHandler