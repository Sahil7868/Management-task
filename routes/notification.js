var express = require('express');
var router = express.Router();
var notification=require('../models/notification_model');

router.get('/:id?',function(req,res,next){
 
if(req.params.id){
 
notification.getnotificationById(req.params.id,function(err,rows){
 
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
 
notification.getAllnotification(function(err,rows){
 
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

notification.addnotification(req.body,function(err,count){
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
 
notification.deletenotification(req.params.id,function(err,count){
 
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
 
notification.updatenotification(req.params.id,req.body,function(err,rows){
 
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