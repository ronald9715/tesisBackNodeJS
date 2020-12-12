const express=require('express');
const app=express();
const cors=require('cors');
const db=require('./database');

//Settings
app.set('port',process.env.PORT||3001);

//Middlewares

app.use(express.json());
app.use(cors());
app.use((req,res,next)=>{
    req.db=db;
    next();
    })


//routes

app.use(require('./routes/registerRoute'));
app.use(require('./routes/loginRoute'));
app.use(require('./routes/ejercicioRoute'));

//Running
app.listen(app.get('port'),()=>{
    console.log(`Server running on port ${app.get('port')}`);
})