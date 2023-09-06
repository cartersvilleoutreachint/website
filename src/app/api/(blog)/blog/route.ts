import clientPromise from "@/app/lib/mongodb"
import { NextResponse } from "next/server"
import typeChecker from "../../../lib/runtimeTypeChecker"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"

export async function POST(req: Request){
    const {getUser, isAuthenticated} = getKindeServerSession();

    if(isAuthenticated()){

    
    const newBlogTemplate = {
        metadata: {
            title: "string",
            "url?": "string",
            date: "number",
            imgSrc: "string"
        },
        content: "string"
    }

    const newBlog = await req.json();

    if(typeChecker(newBlog, newBlogTemplate)){
    newBlog.metadata.url = "/article/" + encodeURIComponent(newBlog.metadata.title)
    
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
}else{
    return NextResponse.json({error: "Unauthorized"}, {status: 401})
}
}