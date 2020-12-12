const {Router}=require('express');
const router=Router();
const multer=require('multer');
let upload=multer();

const RegisterController=require('../controllers/registerController');




router.post('/api/register',upload.none(),RegisterController.postUserRegister);
module.exports=router;