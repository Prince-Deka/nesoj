const express = require('express');
const router = express.Router();
const RegisterModel = require('../models/userSchema');

router.post('/logincheck',(req,res)=>{
    RegisterModel.find({"email": req.body.email , "password": req.body.password})
    .then(getsearchDocument=>{
        if(getsearchDocument.length > 0){
            res.status(200).send(getsearchDocument)
        }
        else{
            res.status(404).send({message:"Not Matched"})
        }
    })
    .catch(err=>{
        res.status(500).send({message: "DB Problem..Error in Retriving with id "+ req.params.Email})
    })
})
module.exports=router;