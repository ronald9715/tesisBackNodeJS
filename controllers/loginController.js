const LoginAccess=require('../models/loginModel');
exports.postLogin=(req,res)=>{
    const {apellido,password}=req.body;
    console.log(apellido,password);
    const db=req.db;
    LoginAccess.post(db,apellido,password,res);
   
    
    

    
}