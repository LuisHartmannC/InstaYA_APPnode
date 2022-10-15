const express=require("express");
const router=express.Router();
const Hermes=require("../models/things");

router.post('/objects',(req,res)=>{
    const Usuario= Champion(req.body);
    Usuario
    .save()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
});

router.get('/objects',(req,res)=>{
    Champion()
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
});

router.get('/objects/:id',(req,res)=>{
    const {id}=req.params;
    Champion
    .find(id)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
});

router.get('/objects/:id',(req,res)=>{
    const {id}=req.params;
    const {CiudadR,DireccionR,NombreD,CedulaD,CiudadD,DireccionD,Fecha,Hora,Alto,Ancho,Largo,Peso}=req.body;
    Champion
    .updateOne({_id:id},{ $set: {CiudadR,DireccionR,NombreD,CedulaD,CiudadD,DireccionD,Fecha,Hora,Alto,Ancho,Largo,Peso}})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
});

router.get('/objects/:id',(req,res)=>{
    const {id}=req.params;
    Champion
    .remove({_id:id})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
});

module.exports = router ;