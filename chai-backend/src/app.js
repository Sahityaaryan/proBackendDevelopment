import cookieParser from 'cookie-parser';
import cors from 'cors';

import express from 'express';

const app = express();

const port = process.env.PORT || 3020;


// You can learn much about the docs of the "mongoose"


// extra configuration settings for the "cors" middleware
const corsConfig =  {
    'origin': '*' || process.env.CORS_ORIGIN, //we can specify origin in the .env file as well
    'credentials': true // by setting it true we can allow the client to include the credentials (TLS client certificate),cookies, authentication headers) as headers in it's request 
}

// * by this we can configure our middlewares
app.use(cors(corsConfig));


// * No need of boodyparser to accept json() body
// % we can set the limit for the size of the data.
app.use(express.json({limit: '16kb'}));


// % 
app.use(express.urlencoded({extended: true ,  limit: '16kb'})); // extended : "true" will help the app to handle the nested objects as well.


app.use(express.static("public")) // where we want to add some files or images


app.use(cookieParser()); // this help me to access and modify the cookies of the user's browser


export { app }