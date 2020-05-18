const http=require('http');
const express=require('express');
const morgan=require('morgan');
const bodyParser=require('body-parser');
const dishRouter=require('./routers/dishRouter.js');
const promoRouter=require('./routers/promoRouter.js');
const leaderRouter=require('./routers/leaderRouter.js');
const hostname='localhost';
const port=3000;
const app=express();


app.use(morgan('dev'));
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());
app.use('/dishes' ,dishRouter);
app.use(['/promotions'] ,promoRouter);
app.use(['/leaders'] ,leaderRouter);

const server=http.createServer(app);
server.listen(port,hostname,()=>{
    console.log(`Server listening on http://${hostname}:${port}`);
})