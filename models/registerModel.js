module.exports={
    post:(db,nombre,apellido,rol,password)=>{
        const query=`insert into usuario (nombre,apellido,rol,password) values (?,?,?,?)`;

        db.query(query,[nombre,apellido,rol,password],(err,rows,fields)=>{
           
            if(!err){
                console.log("Usuario creado");
                
            }else{
                console.log(err);
            }
        })
        
        db.query(`select * from usuario where nombre=? and apellido=?`,[nombre,apellido],(err,rows,fields)=>{
            if(!err){
                let id_usuario=rows[0].id;
                console.log(rows[0].id);
                db.query(` insert into alumno (nombre,apellido,id_usuario) values (?,?,?)`,[nombre,apellido,id_usuario],(err,rows,fields)=>{
                    if(!err){
                        console.log("Alumno creado");
                    }else{
                        console.log(err);
                    }
                })
            }
            
        })
       

      
    }
}