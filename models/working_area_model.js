var db=require('../dbconnection'); //reference of dbconnection.js
 
var working_area={
 
get_Allworking_area:function(callback){
return db.query("Select * from working_area_tbl",callback); 
},

 get_working_area_Byworking_area_Id:function(id,callback){
return db.query("select * from working_area_tbl where working_area_id=?",[id],callback);
 },

 add_working_area:function(working_area,callback){
 return db.query("Insert into working_area_tbl(working_area_name) values(?)",
 [working_area.working_area_name],callback);
 },

 delete_working_area:function(id,callback){
  return db.query("delete from working_area_tbl where working_area_id=?",[id],callback);
 },

 update_working_area:function(id,working_area,callback){
  return db.query("update working_area_tbl set working_area_name=? where working_area_id=?",
  [working_area.working_area_name,id],callback);
 }
 
};
 module.exports=working_area;