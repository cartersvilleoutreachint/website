import clientPromise from "@/app/lib/mongodb"
import { NextResponse } from "next/server"

export async function GET(req: Request, {params}: {params: { id: string}}){
    try{
        const client = await clientPromise
        const db = client.db("cartersvilleoutint")
        const results = await db.collection("events").findOne({moreInfoUrl: `/event/${params.id}`})
        return NextResponse.json({data: results})
        
        
        
    }catch(err){
        return NextResponse.json({error: err}, {status: 500})
    }
}