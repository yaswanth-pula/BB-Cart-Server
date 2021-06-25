import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "/.env" });

const dbUri: string = process.env.DB_URI || "";

const mongoClient = new MongoClient(dbUri, {
  useUnifiedTopology: true,
  poolSize: 10,
  maxIdleTimeMS: 10000,
});

const connectToDB = async () => await mongoClient.connect();

export { connectToDB, mongoClient };
