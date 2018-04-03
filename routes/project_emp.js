var express = require('express');
var router = express.Router();
var project_emp=require('../models/project_emp_model');

router.get('/:id?',function(req,res,next){
 
if(req.params.id){
 
project_emp.getproject_empById(req.params.id,function(err,rows){
 
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
 
project_emp.getAllproject_emp(function(err,rows){
 
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

project_emp.addproject_emp(req.body,function(err,count){
  if(err)
  {
  res.json(err);
  }
  else
  {
  res.json(req.body);
  }
  });
 });

 router.delete('/:id',function(req,res,next){
 
project_emp.deleteproject_emp(req.params.id,function(err,count){
 
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
 
project_emp.updateproject_emp(req.params.id,req.body,function(err,rows){
 
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