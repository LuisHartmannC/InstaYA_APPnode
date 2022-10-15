const express=require("express");
const router=express.Router();
const Champion=require("../models/user");

router.post('/people',(req,res)=>{
    const Usuario= Champion(req.body);
    Usuario
    .save()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
});

router.get('/people',(req,res)=>{
    Champion()
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
});

router.get('/people/:id',(req,res)=>{
    const {id}=req.params;
    Champion
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
});

module.exports = router ;