import cookieParser from 'cookie-parser';
import cors from 'cors';

import express from 'express';

const app = express();




const corsConfig =  {
    'origin': '*', //we can specify origin in the .env file as well
    'credentials': true // by setting it true we can allow the client to icnlude the credentials (TLS client certificate),cookies, authentication headers) as headers in it's request 
}

// * by this we can configure our middlewares
app.use(cors(corsConfig));


// * No need of boodyparser to accept json() body
// % we can set the limit for the size of the data.
app.use(express.json({limit: '16kb'}));


// % 
app.use(express.urlencoded({extended: true ,  limit: '16kb'}));


app.use(cookieParser());
