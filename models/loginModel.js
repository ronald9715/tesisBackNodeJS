module.exports={
    post:(db,apellido,password,res)=>{
        
        db.query(`select * from usuario where apellido=? and password=?`,[apellido,password],(err,rows,fields)=>{
            if(!err){
                
              
                res.send(rows[0]);
                
            }else{
                console(err);
            }
        })
    }
}