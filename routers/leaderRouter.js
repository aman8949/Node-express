const express=require('express');
const bodyParser=require('body-parser');
const leaderRouter=express();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader("Content-Type","text/plain");
    next();
})
.get((req,res,next)=>
{
    res.end("Will send the details of all leaders to you!!");
})
.post((req,res,next)=>{
    res.end('Will add the leader '+ req.body.name + ' with description '+ req.body.description);
})
.put((req,res,next)=>{
    res.statusCode=403;
    res.end('PUT operation not supported');
})
.delete((req,res,next)=>{
    res.end('Will delete all the leaders!! ');
});

leaderRouter.route('/:leaderId')
.all((req,res,next)=>{

    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('Will send the deatils of leader with leaderId: '+ req.params.leaderId +' to you!!');
})
.post((req,res,next)=>{
    res.statusCode=403;
    res.end('POST Operation not supported on leader with leaderId:'+ req.params.leaderId );
})
.put((req,res,next)=>{
    res.end('Updating the leader with leaderId: '+ req.params.leaderId);
})
.delete((req,res,next)=>{
    res.end('Will delete the leader with leaderId:'+  req.params.leaderId);
});

 module.exports=leaderRouter;
 