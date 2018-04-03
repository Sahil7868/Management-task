var db=require('../dbconnection'); //reference of dbconnection.js
 
var project_table={
 
get_Allproject:function(callback){
return db.query("Select * from project_tbl",callback); 
},

 get_project_Byproject_Id:function(id,callback){
return db.query("select * from project_tbl where project_id=?",[id],callback);
 },

 add_project:function(project_table,callback){
 return db.query("Insert into project_tbl(project_name,manager_id,start_date,description) values(?,?,?,?)",
 [project_table.project_name,project_table.manager_id,project_table.start_date,project_table.description],callback);
 },

 delete_project:function(id,callback){
  return db.query("delete from project_tbl where project_id=?",[id],callback);
 },

 update_project:function(id,project_table,callback){
 return db.query("update project_tbl set project_name=?,manager_id=?,start_date=?,description=? where project_id=?",
 [project_table.project_name,project_table.manager_id,project_table.start_date,project_table.description,id],callback);
 }
 
};
 module.exports=project_table;