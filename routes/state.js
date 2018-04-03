var express = require('express');
var router = express.Router();
var state=require('../models/state_model');

router.get('/:id?',function(req,res,next){
 
if(req.params.id){
 
state.getstateBystate_Id(req.params.id,function(err,rows){
 
if(err)
  {
  res.json(err);
  }
  else{
  res.json(rows);
  }
  });
 }
 else{
 
state.getAllstate(function(err,rows){
 
if(err)
  {
  res.json(err);
  }
  else
  {
  res.json(rows);
  }
 
 });
 }
 });

 router.post('/',function(req,res,next){

state.addstate(req.body,function(err,count){
  if(err)
  {
  res.json(err);
  }
  else
  {
  res.json(req.body);//or return count for 1 &amp;amp;amp; 0
  }
  });
 });

 router.delete('/:id',function(req,res,next){
 
state.deletestate(req.params.id,function(err,count){
 
if(err)
  {
  res.json(err);
  }
  else
  {
  res.json(count);
  }
 
});
 });
router.put('/:id',function(req,res,next){
 
state.updatestate(req.params.id,req.body,function(err,rows){
 
if(err)
  {
  res.json(err);
  }
  else
  {
  res.json(rows);
  }
  });
 });
 module.exports = router;