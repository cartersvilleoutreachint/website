import clientPromise from "@/app/lib/mongodb"
import { NextResponse } from "next/server"
import typeChecker from "../../../lib/runtimeTypeChecker"

export async function POST(req: Request){
    const newEventTemplate = {
        title: "string",
        location: "string",
        locationUrl: "string",
        date: "number",
        shortDesc: "string",
        content: "string"
    }

    const newEvent = await req.json();

    if(typeChecker(newEvent, newEventTemplate)){

    try{
        const client = await clientPromise
        const db = client.db("cartersvilleoutint")
        await db.collection("events").insertOne(newEvent)
        
        return NextResponse.json({"status": "Success"}, {status: 200})
    }catch(err){
        console.error(err)
        return NextResponse.json({error: "Server Error"}, {status: 500})
    }

    }else{
        return NextResponse.json({error: "Bad Data Recieved"}, {status: 500})
    }
}