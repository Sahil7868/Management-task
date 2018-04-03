var db=require('../dbconnection'); //reference of dbconnection.js
 
var slot_table={
 
get_Allslot:function(callback){
return db.query("Select * from slot_tbl",callback); 
},

 get_slot_Byslot_Id:function(id,callback){
return db.query("select * from slot_tbl where manager_id=? AND employee_id=0",[id],callback);
 },

 add_slot:function(slot_table,callback){
 return db.query("Insert into slot_tbl(manager_id,slot_time,employee_id,isactive) values(?,?,?,?)",
 [slot_table.manager_id,slot_table.slot_time,slot_table.employee_id,slot_table.isactive],callback);
 },

 delete_slot:function(id,callback){
  return db.query("delete from slot_tbl where slot_id=?",[id],callback);
 },

 update_slot:function(id,slot_table,callback){
  return db.query("update slot_tbl set manager_id=?,slot_time=?,employee_id=?,isactive=? where slot_id=?",
  [slot_table.manager_id,slot_table.slot_time,slot_table.employee_id,slot_table.isactive,id],callback);
 }
 
};
 module.exports=slot_table;