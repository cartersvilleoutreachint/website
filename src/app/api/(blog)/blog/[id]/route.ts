import clientPromise from "@/app/lib/mongodb"
import { NextResponse } from "next/server"
import typeChecker from "../../../../lib/runtimeTypeChecker"
import {ObjectId} from "mongodb"

export async function GET(req: Request, {params}: {params: { id: string}}){
    try{
        const client = await clientPromise
        const db = client.db("cartersvilleoutint")
        const results = await db.collection("blog").findOne({_id: new ObjectId(params.id)})
        return NextResponse.json({data: results})
    }catch(err){
        return NextResponse.json({error: err}, {status: 500})
    }
}

export async function PUT(req: Request, {params}: {params: { id: string}}){

    const updateBlogTemplate = {
       "metadata?": {
            "title?": "string",
            "url?": "string",
            "date?": "number",
            "imgSrc?": "string"
        },
        "content?": "string"
    }

    const updatedBlogFields = await req.json()
    const newData =JSON.parse(JSON.stringify(updatedBlogFields))
    newData.metadata.date = new Date().getTime();

    
    if(typeChecker(updatedBlogFields, updateBlogTemplate)){
        const newObj = {};
        if(newData.metadata){
            for(let key in newData.metadata){
                //@ts-ignore
                newObj[`metadata.${key}`] = newData.metadata[key]
            }
        }
        if(newData.content){
            //@ts-ignore
            newObj["content"] = newData.content
        }
       

        try{
            const client = await clientPromise
            const db = client.db("cartersvilleoutint")
            
            await db.collection("blog").updateOne(
            {_id: new ObjectId(params.id)},
            {$set: {...newObj}})
            return NextResponse.json({data: "Success"}, {status: 200})
        }catch(err){
            return NextResponse.json({error: err}, {status: 500})
        }
    }else{
        return NextResponse.json({error: "Bad Data Recieved"}, {status: 500})
    }

    
}

export async function DELETE(req: Request, {params}: {params: { id: string}}){
    try{
        const client = await clientPromise
        const db = client.db("cartersvilleoutint")
        await db.collection("blog").deleteOne({_id: new ObjectId(params.id)})
        return NextResponse.json({data: "Success"}, {status: 200})
    }catch(err){
        return NextResponse.json({error: err}, {status: 500})
    }
}