var db=require('../dbconnection'); //reference of dbconnection.js
 
var manager_login_check={
 
getAllmanager:function(callback){
return db.query("Select * from user_tbl where designation='manager'",callback); 
},

 getmanagerByuser_Id:function(id,callback){
return db.query("select * from user_tbl where email_id=? AND designation='manager'",[id],callback);
 }
//  adduser:function(user_tbl_model,callback){
//  return db.query("Insert into user_tbl(user_firstname,user_middlename,user_lastname,designation,joining_date,email_id,address,city_id,contact_number,gender,date_of_birth,password,isactive) values(?,?,?,?,?,?,?,?,?,?,?,?,?)",
//  [user_tbl_model.user_firstname,user_tbl_model.user_middlename,user_tbl_model.user_lastname,user_tbl_model.designation,user_tbl_model.joining_date,user_tbl_model.email_id,user_tbl_model.address,user_tbl_model.city_id,user_tbl_model.contact_number,user_tbl_model.gender,user_tbl_model.date_of_birth,user_tbl_model.password,user_tbl_model.isactive],callback);
//  },

//  deleteuser:function(id,callback){
//   return db.query("delete from user_tbl where user_id=?",[id],callback);
//  },

//  updateuser:function(id,user_tbl_model,callback){
//   return db.query("update user_tbl set user_firstname=?,user_middlename=?,user_lastname=?,designation=?,joining_date=?,email_id=?,address=?,city_id=?,contact_number=?,gender=?,date_of_birth=?,password=?,isactive=? where user_id=?",
//   [user_tbl_model.user_firstname,user_tbl_model.user_middlename,user_tbl_model.user_lastname,user_tbl_model.designation,user_tbl_model.joining_date,user_tbl_model.email_id,user_tbl_model.address,user_tbl_model.city_id,user_tbl_model.contact_number,user_tbl_model.gender,user_tbl_model.date_of_birth,user_tbl_model.password,user_tbl_model.isactive,id],callback);
//  }
 
};
 module.exports=manager_login_check;