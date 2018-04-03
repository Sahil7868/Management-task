var db=require('../dbconnection'); //reference of dbconnection.js
 
var task_model={
 
getAlltask:function(callback){
return db.query("Select * from task_tbl",callback); 
},

 gettaskBytask_Id:function(id,callback){
return db.query("select * from task_tbl where task_id=?",[id],callback);
 },

 addtask:function(task_model,callback){
 return db.query("Insert into task_tbl(employee_id,manager_task_link,timecheck,manager_id,isactive,employee_task_link) values(?,?,?,?,?,?)",
 [task_model.employee_id,task_model.manager_task_link,task_model.timecheck,task_model.manager_id,task_model.isactive,task_model.employee_task_link],callback);
 },

 deletetask:function(id,callback){
  return db.query("delete from task_tbl where task_id=?",[id],callback);
 },

 updatetask:function(id,task_model,callback){
  return db.query("update task_tbl set employee_id=?,manager_task_link=?,timecheck=?,manager_id=?,isactive=?,employee_task_link=? where task_id=?",
  [task_model.employee_id,task_model.manager_task_link,task_model.timecheck,task_model.manager_id,task_model.isactive,task_model.employee_task_link,id],callback);
 }
 
};
 module.exports=task_model;