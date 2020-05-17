const http=require('http');
const express=require('express');
const morgan=require('morgan');
const bodyParser=require('body-parser');
const hostname='localhost';
const port=3000;
const app=express();

app.use(morgan('dev'));
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json())

app.all('/dishes',(req,res,next)=>{

    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
});

app.get('/dishes',(req,res,next)=>{
    res.end('Will send the dishes to you!!');
});

app.post('/dishes',(req,res,next)=>{
    res.end('Will add the dish '+ req.body.name + ' with description '+ req.body.description);
});

app.put('/dishes',(req,res,next)=>{
    res.statusCode=403;
    res.end('PUT operation not supported');
});
app.delete('/dishes',(req,res,next)=>{
    res.end('Will delete all the dishes!! ');
});

app.get('/dishes/:dishID',(req,res,next)=>{
    res.end('Will send the dish deatils with dishID: '+ req.params.dishID +' to you!!');
});

app.post('/dishes/:dishID',(req,res,next)=>{
    res.statusCode=403;
    res.end('POST Operation not supported on dish with dishID:'+ req.params.dishID );
});

app.put('/dishes/:dishId', (req, res, next) => {
    res.write('Updating the dish: ' + req.params.dishId + '\n');
    res.end('Will update the dish: ' + req.body.name + 
          ' with details: ' + req.body.description);
  });
app.delete('/dishes/:dishID',(req,res,next)=>{
    res.end('Will delete the dish with dishID:'+  req.params.dishID);
});

const server=http.createServer(app);
server.listen(port,hostname,()=>{
    console.log(`Server listening on http://${hostname}:${port}`);
})