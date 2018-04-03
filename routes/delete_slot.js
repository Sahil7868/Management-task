var express = require('express');
var router = express.Router();
var delete_slot=require('../models/delete_slot_model');

router.delete('/:id',function(req,res,next){
 
delete_slot.delete_isactiveZero_slot_By_manager_id(req.params.id,function(err,count){
 
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
 module.exports = router;