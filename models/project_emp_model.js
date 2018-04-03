var db=require('../dbconnection'); //reference of dbconnection.js
 
var project_emp={
 
getAllproject_emp:function(callback){
 
return db.query("Select * from project_emp_tbl",callback);
 
},

 getproject_empById:function(id,callback){
 
return db.query("select * from project_emp_tbl where project_emp_id=?",[id],callback);
 },

 addproject_emp:function(project_emp,callback){
 return db.query("Insert into project_emp_tbl(project_id,employee_id,working_area_id)values(?,?,?)",
 [project_emp.project_id,project_emp.employee_id,project_emp.working_area_id],callback);
},

 deleteproject_emp:function(id,callback){
  return db.query("delete from project_emp_tbl where project_emp_id=?",[id],callback);
 },

 updateproject_emp:function(id,project_emp,callback){
  return db.query("update project_emp_tbl set project_id=?,employee_id=?,working_area_id=? where project_emp_id=?",
  [project_emp.project_id,project_emp.employee_id,project_emp.working_area_id,id],callback);
 }
 
};
 module.exports=project_emp;