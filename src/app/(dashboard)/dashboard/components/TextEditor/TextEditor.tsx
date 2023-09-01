"use client"

import { Editor } from "@tinymce/tinymce-react"
import { fromBlob } from "image-resize-compress"

interface proptype{
    editorRef: any,
    setImageIsUploading: any,
    setContentChanged: any,
    currentContent: string
}
export default function TextEditor(props: proptype) {

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
  return (
    <>
    <Editor
    id="textEditor"
    initialValue={props.currentContent}
    apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
    onInit={(evt, editor)=>{
        props.editorRef.current = editor
    }}
    onKeyUp={()=>{
        props.setContentChanged(true)
    }}
    init={{
    width:"100%",
    height:"100%",
    plugins: 'image lists link code codesample',
    toolbar: 'undo redo | styleselect fontselect fontsizeselect | bold italic codesample | alignleft aligncenter alignright alignjustify | numlist bullist link code | outdent indent| image',
    fontsize_formats: "14pt 18pt 24pt 36pt 48pt",
    image_title: true,
    /* enable automatic uploads of images represented by blob or data URIs*/
    automatic_uploads: true,
    a11y_advanced_options: true,
    file_picker_types: 'image',
    content_style: "@import url('https://fonts.googleapis.com/css2?family=Comic+Neue:wght@300;400;700&family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Inspiration&family=Lobster&display=swap'); body{font-family: 'IBM Plex Sans'}",
    font_formats:
    "IBM Plex Sans=IBM Plex Sans,Andale Mono=andale mono,times; Inspiration=inspiration,cursive; Lobster=lobster,cursive; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic neue,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats",
    
    file_picker_callback: function (cb, value, meta) {
        const input = document.getElementById('imgUpload')! as HTMLInputElement;
        input.click();

        input.onchange = function() { compressImage(input.files![0], {height: 200}).then((myBlob)=>{
            var file = myBlob;
            const formData = new FormData();
            
            formData.append("image", file);
            props.setImageIsUploading(true)
            fetch("https://api.imgur.com/3/image", {
                        method: "POST",
                        headers: {
                             /* ********  PUT IMGUR CLIENT ID HERE  ********* */
                                "Authorization": `Client-ID ${process.env.NEXT_PUBLIC_IMGUR_CLIENT_ID}`
                        },
                        body: formData
                    }).then((res)=>res.json()).then((data)=>{
                        props.setImageIsUploading(false)
                        cb(`${data.data.link}`, {title: `${data.data.id}`});
                    }).catch((err)=>{
                        console.log(err)
                        props.setImageIsUploading(false)
                    })
        });
    }
}
    }}
    />
    <input accept="image/*" id="imgUpload" type="file" name="imgUpload" style={{display: "none"}}/>
    </>
  )
}
