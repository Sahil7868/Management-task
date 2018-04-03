var db=require('../dbconnection'); //reference of dbconnection.js
 
var manage_appoint={
 
getAllmanage_appoint:function(callback){
 
return db.query("Select * from manage_appoint_tbl",callback);
 
},

 getmanage_appointById:function(id,callback){
 
return db.query("select * from manage_appoint_tbl where manager_appointment_id=?",[id],callback);
 },

 addmanage_appoint:function(manage_appoint,callback){
 return db.query("Insert into manage_appoint_tbl(manager_id,start_time,end_time,total_appointment)values(?,?,?,?)",
 [manage_appoint.manager_id,manage_appoint.start_time,manage_appoint.end_time,manage_appoint.total_appointment],callback);
},

 deletemanage_appoint:function(id,callback){
  return db.query("delete from manage_appoint_tbl where manager_appointment_id=?",[id],callback);
 },

 updatemanage_appoint:function(id,manage_appoint,callback){
  return db.query("update manage_appoint_tbl set manager_id=?,start_time=?,end_time=?,total_appointment=? where manager_appointment_id=?",
  [manage_appoint.manager_id,manage_appoint.start_time,manage_appoint.end_time,manage_appoint.total_appointment,id],callback);
 }
 
};
 module.exports=manage_appoint;