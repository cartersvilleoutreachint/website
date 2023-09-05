import clientPromise from "../../../lib/mongodb"
import { NextResponse } from "next/server"
import typeChecker from "../../../lib/runtimeTypeChecker"

export async function POST(req: Request){
    const newTeamTemplate = {
       imgSrc: "string",
       description: "string",
       role: "string",
       name: "string",
       order: "number"
    }

    const newTeam = await req.json();
    if(typeChecker(newTeam, newTeamTemplate)){

    
    try{
        const client = await clientPromise
        const db = client.db("cartersvilleoutint")
        await db.collection("team").insertOne(newTeam)
        
        return NextResponse.json({"status": "Success"}, {status: 200})
    }catch(err){
        console.error(err)
    }

    }else{
        return NextResponse.json({error: "Bad Data Recieved"}, {status: 500})
    }
}

export async function GET(){
    try{
        const client = await clientPromise
        const db = client.db("cartersvilleoutint")
        const results = await db.collection("team").find().toArray()
        
        return NextResponse.json({data: results}, {status: 200})
    }catch(err){
        return NextResponse.json({error: err}, {status: 500})
    }
}