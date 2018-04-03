var db=require('../dbconnection'); //reference of dbconnection.js
 
var state={
 
getAllstate:function(callback){
return db.query("Select * from state",callback); 
},

 getstateBystate_Id:function(id,callback){
return db.query("select * from state where state_id=?",[id],callback);
 },

 addstate:function(state,callback){
 return db.query("Insert into state(state_name) values(?)",
 [state.state_name],callback);
 },

 deletestate:function(id,callback){
  return db.query("delete from state where state_id=?",[id],callback);
 },

 updatestate:function(id,state,callback){
  return db.query("update state set state_name=? where state_id=?",
  [state.state_name,id],callback);
 }
 
};
 module.exports=state;