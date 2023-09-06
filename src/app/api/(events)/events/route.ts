import clientPromise from "@/app/lib/mongodb"
import { NextResponse } from "next/server"
import typeChecker from "../../../lib/runtimeTypeChecker"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"

export async function POST(req: Request){

    const {isAuthenticated} = getKindeServerSession();
    if(!isAuthenticated()){
        return NextResponse.json({error: "Unauthorized"}, {status: 401})
    }

    const newEventTemplate = {
        title: "string",
        location: "string",
        locationUrl: "string",
        date: "number",
        shortDesc: "string",
        content: "string",
        imgSrc:"string",
        "moreInfoUrl?": "string"
    }

    const newEvent = await req.json();
    if(typeChecker(newEvent, newEventTemplate)){
        newEvent.moreInfoUrl = "/event/" + (newEvent.title).replaceAll(" ", "_")
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