import { fromBlob } from "image-resize-compress";

async function compressImage(image: any, settings: any){
    const curSettings = {
        quality: 80,
        width: "auto",
        height: "auto",
        format: "jpg",
        ...settings
    }
    const compressRes = await fromBlob(image, curSettings.quality, curSettings.width, curSettings.height, curSettings.format);
    return compressRes;
}
export default compressImage