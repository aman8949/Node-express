const express=require('express');
const bodyParser=require('body-parser');

const dishRouter=express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/:dishId')
.all((req,res,next)=>{

    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('Will send the dish deatils with dishId: '+ req.params.dishId +' to you!!');
})
.post((req,res,next)=>{
    res.statusCode=403;
    res.end('POST Operation not supported on dish with dishId:'+ req.params.dishId );
})
.put((req,res,next)=>{
    res.end('Updating the dish with dishId: '+ req.params.dishId);
})
.delete((req,res,next)=>{
    res.end('Will delete the dish with dishId:'+  req.params.dishId);
});

 module.exports=dishRouter;
 