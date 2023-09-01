import clientPromise from "@/app/lib/mongodb"
import { NextResponse } from "next/server"

export async function GET(){
    try{
        const client = await clientPromise
        const db = client.db("cartersvilleoutint")
        const results = await db.collection("blog").find({},{projection: {metadata: 1}}).sort({"metadata.date": -1}).limit(3).toArray()
        
        return NextResponse.json({data: {...results}})
    }catch(err){
        console.error(err)
        return NextResponse.json({error: err}, {status: 500})
    }
}

