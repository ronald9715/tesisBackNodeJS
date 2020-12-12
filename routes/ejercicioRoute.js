const {Router}=require('express');
const router=Router();
const multer=require('multer');
const upload=multer();

router.get('/api/ejercicio/:unidad',(req,res)=>{
    const {unidad}=req.params;
    const db=req.db;
    db.query('select a1,a2,a3,a4,a5,a6 from ejercicio where unidad=?',[unidad],(err,rows,fields)=>{
        if(!err){
            //console.log(rows[0]);
            console.log(rows);
            res.send(rows);
        }else{
            console.log("Error")
        }
    })
})
module.exports=router;
