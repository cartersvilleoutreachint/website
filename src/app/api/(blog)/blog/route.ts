import clientPromise from "@/app/lib/mongodb"
import { NextResponse } from "next/server"
import typeChecker from "../../../lib/runtimeTypeChecker"

export async function POST(req: Request){
    const newBlogTemplate = {
        metadata: {
            title: "string",
            url: "string",
            date: "number",
            imgSrc: "string"
        },
        content: "string"
    }

    const newBlog = await req.json();

    if(typeChecker(newBlog, newBlogTemplate)){

    
    try{
        const client = await clientPromise
        const db = client.db("cartersvilleoutint")
        await db.collection("blog").insertOne(newBlog)
        
        return NextResponse.json({}, {status: 200})
    }catch(err){
        console.error(err)
    }

    }else{
        return NextResponse.json({error: "error"}, {status: 500})
    }
}