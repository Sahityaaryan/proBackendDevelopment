
import dotenv from 'dotenv';


console.log('dotenv: ',dotenv)

dotenv.config({
	path: '../env'
})

import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


  async function connectDB(){

    console.log("Connecting: ",process.env.MONGODB_URI)

    try {
		const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

        if(connectionInstance)
        {
            console.log(`\n MOngoDB connected:DB HOST:${connectionInstance.connection.host} `)
        }

		
	} catch (error) {
		console.log("Error(while connecting to db): ", error);

        process.exit(1);
	}

}

export default connectDB;