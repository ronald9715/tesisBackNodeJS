const UserRegister=require('../models/registerModel');

exports.postUserRegister=(req,res)=>{
    const{nombre,apellido,rol,password}=req.body;
    
    const db=req.db;

    UserRegister.post(db,nombre,apellido,rol,password);
}