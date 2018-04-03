var db=require('../dbconnection'); //reference of dbconnection.js
 
var delete_slot={
 
 delete_isactiveZero_slot_By_manager_id:function(id,callback){
  return db.query("delete from slot_tbl where isactive=0 and manager_id=?",[id],callback);
 }
 
};
 module.exports=delete_slot;