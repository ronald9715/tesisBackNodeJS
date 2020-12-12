const {Router}=require('express');
const router=Router();
const multer=require('multer');
const upload=multer();
const LoginController=require('../controllers/loginController');

router.post('/api/login',upload.none(),LoginController.postLogin);
module.exports=router;