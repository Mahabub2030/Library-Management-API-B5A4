import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";
let server: Server;

const PORT = 5000;

async function main() {
  try {
    await mongoose.connect(
      "mongodb://library-managements:1XIKwBn96kQyocxZ@ac-cgkxfia-shard-00-00.x9t7sgg.mongodb.net:27017,ac-cgkxfia-shard-00-01.x9t7sgg.mongodb.net:27017,ac-cgkxfia-shard-00-02.x9t7sgg.mongodb.net:27017/library-managements?ssl=true&replicaSet=atlas-nszs70-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"
    ),
      console.log("contted with mongodb useing mongoose");
    server = app.listen(PORT, () => {
      console.log(`Library is listeing on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();
