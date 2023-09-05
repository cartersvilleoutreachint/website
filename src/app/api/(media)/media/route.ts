import clientPromise from "../../../lib/mongodb"
import { NextResponse } from "next/server"
import typeChecker from "../../../lib/runtimeTypeChecker"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function POST(req: Request){

    const {isAuthenticated} = getKindeServerSession();
    if(!isAuthenticated()){
        return NextResponse.json({error: "Unauthorized"}, {status: 401})
    }

    const newMediaTemplate = {
       imgSrc: "string",
       title: "string",
       link: "string"
    }

    const newMedia = await req.json();

    if(typeChecker(newMedia, newMediaTemplate)){

    try{
        const client = await clientPromise
        const db = client.db("cartersvilleoutint")
        await db.collection("media").insertOne(newMedia)
        
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
        const results = await db.collection("media").find().toArray()
        
        return NextResponse.json({data: results}, {status: 200})
    }catch(err){
        return NextResponse.json({error: err}, {status: 500})
    }
}