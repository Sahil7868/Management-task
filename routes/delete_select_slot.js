var express = require('express');
var router = express.Router();
var delete_select_slot=require('../models/delete_select_slot_model');

router.get('/:id?',function(req,res,next){
 
if(req.params.id){
 
delete_select_slot.get_all_allocated_slot_BymanagerId(req.params.id,function(err,rows){
 
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
 
delete_select_slot.getAllslots(function(err,rows){
 
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


 router.delete('/:employee_id/:manager_id',function(req,res,next){
 
delete_select_slot.delete_allocated_slot_to_employee(req.params.employee_id,req.params.manager_id,function(err,count){
 
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
 
delete_select_slot.update1_slot(req.params.id,req.body,function(err,rows){
 
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