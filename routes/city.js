var express = require('express');
var router = express.Router();
var city=require('../models/city_model');

router.get('/:id?',function(req,res,next){
 
if(req.params.id){
 
city.getcityById(req.params.id,function(err,rows){
 
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
 
city.getAllcity(function(err,rows){
 
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

city.addcity(req.body,function(err,count){
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
 
city.deletecity(req.params.id,function(err,count){
 
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
 
city.updatecity(req.params.id,req.body,function(err,rows){
 
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