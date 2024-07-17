import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://aadesh:L9EeifdbBUHOzmHj@cluster0.osgjdo6.mongodb.net/auth-demo?retryWrites=true&w=majority&appName=Cluster0"
  );

  return client;
}
