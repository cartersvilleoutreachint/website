import clientPromise from "@/app/lib/mongodb"
import { NextResponse } from "next/server"
import typeChecker from "../../../../lib/runtimeTypeChecker"
import {ObjectId} from "mongodb"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"

export async function GET(req: Request, {params}: {params: { id: string}}){
    try{
        const client = await clientPromise
        const db = client.db("cartersvilleoutint")

        const results = await db.collection("events")
        .findOne({_id: new ObjectId(params.id)})

        return NextResponse.json({data: results})
    }catch(err){
        return NextResponse.json({error: err}, {status: 500})
    }
}

export async function PUT(req: Request, {params}: {params: { id: string}}){

    const {isAuthenticated} = getKindeServerSession();
    if(!isAuthenticated()){
        return NextResponse.json({error: "Unauthorized"}, {status: 401})
    }

    const updateEventTemplate = {
       "content?":" string",
        "title?": "string",
        "location?": "string",
        "locationUrl?": "string",
        "date?": "number",
       "shortDesc?": "string"
    }

    const updatedEventFields = await req.json()
    
    if(typeChecker(updatedEventFields, updateEventTemplate)){

        try{
            const client = await clientPromise
            const db = client.db("cartersvilleoutint")
            
            await db.collection("events").updateOne(
            {_id: new ObjectId(params.id)},
            {$set: updatedEventFields})
            return NextResponse.json({data: "Success"}, {status: 200})
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
        await db.collection("events").deleteOne({_id: new ObjectId(params.id)})
        return NextResponse.json({data: "Success"}, {status: 200})
    }catch(err){
        return NextResponse.json({error: err}, {status: 500})
    }
}