import { MongoClient } from "mongodb";


if (!process.env.MONGODB_URI) {
    throw new Error('Add Mongo URI to .env.local')
  }
    const client = new MongoClient(process.env.MONGODB_URI)
    const clientPromise = client.connect()

export default clientPromise