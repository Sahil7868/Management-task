var db=require('../dbconnection'); //reference of dbconnection.js
 
var notification={
 
getAllnotification:function(callback){
 
return db.query("Select * from notification_tbl",callback);
 
},

 getnotificationById:function(id,callback){
 
return db.query("select * from notification_tbl where notification_id=?",[id],callback);
 },

 addnotification:function(notification,callback){
 return db.query("Insert into notification_tbl(notification_description,employee_id,manager_id,isactive,notification_type)values(?,?,?,?,?)",
 [notification.notification_description,notification.employee_id,notification.manager_id,notification.isactive,notification.notification_type],callback);
},

 deletenotification:function(id,callback){
  return db.query("delete from notification_tbl where notification_id=?",[id],callback);
 },

 updatenotification:function(id,notification,callback){
  return db.query("update notification_tbl set notification_description=?,employee_id=?,manager_id=?,isactive=?,notification_type=? where notification_id=?",
  [notification.notification_description,notification.employee_id,notification.manager_id,notification.isactive,notification.notification_type,id],callback);
 }
 
};
 module.exports=notification;