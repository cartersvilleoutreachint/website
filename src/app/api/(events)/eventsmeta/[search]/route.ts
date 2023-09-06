import clientPromise from "@/app/lib/mongodb"
import { NextResponse } from "next/server"

export async function GET(req: Request, {params}: {params: {search: string}}){
    try{
        const client = await clientPromise
        const db = client.db("cartersvilleoutint")

        const RegEx = new RegExp((decodeURIComponent(params.search).trim()), "gi")

        const results = await db.collection("events")
        .find({title: { $regex: RegEx} },
        {projection: {
            title: 1,
            locationUrl: 1,
            location: 1,
            date: 1,
            shortDesc: 1,
            moreInfoUrl: 1
        }})
        .sort({date: -1})
        .toArray()
        
        return NextResponse.json({data: results})
    }catch(err){
        return NextResponse.json({error: err}, {status: 500})
    }
}

