import clientPromise from "@/app/lib/mongodb"
import { NextResponse } from "next/server"
import typeChecker from "../../../../lib/runtimeTypeChecker"
import {ObjectId} from "mongodb"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"

export async function PUT(req: Request, {params}: {params: { id: string}}){

    const {isAuthenticated} = getKindeServerSession();
    if(!isAuthenticated()){
        return NextResponse.json({error: "Unauthorized"}, {status: 401})
    }

    const updateMediaTemplate = {
        "imgSrc?": "string",
        "title?": "string",
        "link?": "string"
     }

    const updatedMediaFields = await req.json()
    
    if(typeChecker(updatedMediaFields, updateMediaTemplate)){

        try{
            const client = await clientPromise
            const db = client.db("cartersvilleoutint")
            
            await db.collection("media").updateOne(
            {_id: new ObjectId(params.id)},
            {$set: updatedMediaFields})
            return NextResponse.json({"status": "Success"}, {status: 200})
        }catch(err){
            return NextResponse.json({error: err}, {status: 500})
        }
    }else{
        return NextResponse.json({error: "Bad Data Recieved"}, {status: 500})
    }

    
}

export async function DELETE(req: Request, {params}: {params: { id: string}}){
    
    const {isAuthenticated} = getKindeServerSession();
    if(!isAuthenticated()){
        return NextResponse.json({error: "Unauthorized"}, {status: 401})
    }
    
    try{
        const client = await clientPromise
        const db = client.db("cartersvilleoutint")
        await db.collection("media").deleteOne({_id: new ObjectId(params.id)})
        return NextResponse.json({data: "Success"}, {status: 200})
    }catch(err){
        return NextResponse.json({error: err}, {status: 500})
    }
}