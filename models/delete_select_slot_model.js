var db=require('../dbconnection'); //reference of dbconnection.js
 
var delete_select_slot={
 
 get_all_allocated_slot_BymanagerId:function(id,callback){
return db.query("select employee_id,slot_time from slot_tbl where isactive=1 and manager_id=?",[id],callback);
 },


getAllslots:function(callback){
 
return db.query("select slot_time from slot_tbl",callback);
 
},

delete_allocated_slot_to_employee:function(employee_id,manager_id,callback){
  return db.query("delete from slot_tbl where employee_id=? and manager_id=?",[employee_id,manager_id],callback);
},


update1_slot:function(id,delete_select_slot,callback){
  return db.query("update slot_tbl set employee_id=?,isactive=? where slot_id=?",
  [delete_select_slot.employee_id,delete_select_slot.isactive,id],callback);
 }


};
 module.exports=delete_select_slot;