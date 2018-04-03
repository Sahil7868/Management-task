var db=require('../dbconnection'); //reference of dbconnection.js
 
var starting_slot={
 
getAllstarting_slot:function(callback){
return db.query("Select slot_time from slot_tbl",callback); 
},

 getstarting_slotByslot_Time:function(id,callback){
return db.query("select slot_id from slot_tbl where slot_time=?",[id],callback);
 }

 // addstate:function(state,callback){
 // return db.query("Insert into state(state_name) values(?)",
 // [state.state_name],callback);
 // },

 // deletestate:function(id,callback){
 //  return db.query("delete from state where state_id=?",[id],callback);
 // },

 // updatestate:function(id,state,callback){
 //  return db.query("update state set state_name=? where state_id=?",
 //  [state.state_name,id],callback);
 // }
 
};
 module.exports=starting_slot;