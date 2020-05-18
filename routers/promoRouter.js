const express=require('express');
const bodyParser=require('body-parser');
const promoRouter=express();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader("Content-Type","text/plain");
    next();
})
.get((req,res,next)=>
{
    res.end("Will send the details of all promotions to you!!");
})
.post((req,res,next)=>{
    res.end('Will add the promotion '+ req.body.name + ' with description '+ req.body.description);
})
.put((req,res,next)=>{
    res.statusCode=403;
    res.end('PUT operation not supported');
})
.delete((req,res,next)=>{
    res.end('Will delete all the promotions!! ');
});

promoRouter.route('/:promoId')
.all((req,res,next)=>{

    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('Will send the deatils of promotion with promoId: '+ req.params.promoId +' to you!!');
})
.post((req,res,next)=>{
    res.statusCode=403;
    res.end('POST Operation not supported on promotion with promoId:'+ req.params.promoId );
})
.put((req,res,next)=>{
    res.end('Updating the promotion with promoId: '+ req.params.promoId);
})
.delete((req,res,next)=>{
    res.end('Will delete the promotion with promoId:'+  req.params.promoId);
});

 module.exports=promoRouter;
 