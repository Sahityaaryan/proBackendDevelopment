

import dotenv from 'dotenv';



dotenv.config({
	path: './env'
})


// require('dotenv').config();

import express from 'express';
import mongoose from 'mongoose';
import { DB_NAME } from './constants.js';
import connectDB from './db/index.js';
const app = express();

const port = process.env.PORT;


// connecting to the database

connectDB().then((res)=>{
	app.listen("app is listening: ",port);
}).catch((err)=>{
	console.log("Error: ",err);
})

/*
; (async () => {
	try {
		await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

		app.on("error", (err) => {
			console.log("Error: ", err);
			throw err;
		})

		app.listen(port, () => {
			console.log("App is listening on the port: ", port);
		})
	} catch (error) {
		console.log("Error(while connecting to db): ", error);
	}
})()

*/
