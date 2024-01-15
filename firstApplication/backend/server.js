import express from 'express';

const app = express();

const port = process.env.PORT || 3020;


app.get('/api/login', (req, res) => {
    res.json({'content':`Welcome to login route 😃`});
    console.log(req.url +" sends "+req.method)
})


app.listen(port,function(){
    console.log("Listening on port " + port);
});
