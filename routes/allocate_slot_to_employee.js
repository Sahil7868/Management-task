var express = require('express');
var router = express.Router();
var allocate_slot_to_employee=require('../models/allocate_slot_to_employee_model');

router.put('/:id1/:id',function(req,res,next){
 
allocate_slot_to_employee.allocate_slot_to_employee_function(req.params.id1,req.params.id,req.body,function(err,rows){
 
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