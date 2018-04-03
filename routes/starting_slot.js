var express = require('express');
var router = express.Router();
var starting_slot=require('../models/starting_slot_model');

router.get('/:id?',function(req,res,next){
 
if(req.params.id){
 
starting_slot.getstarting_slotByslot_Time(req.params.id,function(err,rows){
 
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
 
starting_slot.getAllstarting_slot(function(err,rows){
 
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

//  router.post('/',function(req,res,next){

// user_table.adduser(req.body,function(err,count){
//   if(err)
//   {
//   res.json(err);
//   }
//   else
//   {
//   res.json(req.body);//or return count for 1 &amp;amp;amp; 0
//   }
//   });
//  });

//  router.delete('/:id',function(req,res,next){
 
// user_table.deleteuser(req.params.id,function(err,count){
 
// if(err)
//   {
//   res.json(err);
//   }
//   else
//   {
//   res.json(count);
//   }
 
// });
//  });
// router.put('/:id',function(req,res,next){
 
// user_table.updateuser(req.params.id,req.body,function(err,rows){
 
// if(err)
//   {
//   res.json(err);
//   }
//   else
//   {
//   res.json(rows);
//   }
//   });
//  });
 module.exports = router;