var db=require('../dbconnection'); //reference of dbconnection.js
 
var allocate_slot={
 
 allocate_slot_to_employee_function:function(id1,id,slot_table,callback){
 return db.query("update slot_tbl set employee_id=?,isactive=? where slot_id=? and manager_id=?",
 [slot_table.employee_id,slot_table.isactive,id1,id],callback);
 }
 
};
 module.exports=allocate_slot;