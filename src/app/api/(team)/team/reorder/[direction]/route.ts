import clientPromise from "@/app/lib/mongodb"
import { NextResponse } from "next/server"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import typeChecker from "@/app/lib/runtimeTypeChecker";
import { ObjectId } from "mongodb";

export async function POST(req: Request, {params}: {params: { direction: string}}){

    const {isAuthenticated} = getKindeServerSession();
    if(!isAuthenticated()){
        return NextResponse.json({error: "Unauthorized"}, {status: 401})
    }
    
    const bodyData = await req.json()

    if(typeChecker(bodyData, {"_id": "string"})){
    switch((params.direction).trim().toLowerCase()){
        case "up":
            return reorderUp()
        break;

        case "down":
            return reorderDown()
        break;

        default: return NextResponse.json({"Error": "Bad Direction Params"}, {status: 200})
    }
}else{
    return NextResponse.json({error: "Bad Data Recieved"}, {status: 500})
}

    async function reorderUp(){
        
        try{
            const client = await clientPromise
            const db = client.db("cartersvilleoutint")
            const primary = await db.collection("team").findOne({_id: new ObjectId(bodyData._id)})
            const secondary = await db.collection("team")
            .find({order: (primary!.order - 1)}).toArray()
            if(secondary.length > 0){
                await db.collection("team")
                .updateOne({_id: new ObjectId(bodyData._id)}, {$set: {order: (primary!.order - 1)}})

                await db.collection("team")
                .updateOne({_id: new ObjectId(secondary[0]._id)}, {$set: {order: primary!.order}})
            }
            
            return NextResponse.json({"status": "Success"}, {status: 200})
        }catch(err){
            console.error(err)
            return NextResponse.json({"error": err}, {status: 500}) 
        }
    }

    async function reorderDown(){
        try{
            const client = await clientPromise
            const db = client.db("cartersvilleoutint")
            const primary = await db.collection("team").findOne({_id: new ObjectId(bodyData._id)})
            const secondary = await db.collection("team")
            .find({order: (primary!.order + 1)}).toArray()
            if(secondary.length > 0){
                await db.collection("team")
                .updateOne({_id: new ObjectId(bodyData._id)}, {$set: {order: (primary!.order + 1)}})

                await db.collection("team")
                .updateOne({_id: new ObjectId(secondary[0]._id)}, {$set: {order: primary!.order}})
            }
            
            return NextResponse.json({"status": "Success"}, {status: 200})
        }catch(err){
            console.error(err)
            return NextResponse.json({"error": err}, {status: 500}) 
        }
    }

  
}