var db=require('../dbconnection'); //reference of dbconnection.js
 
var buscust={
 
getAllbuscust:function(callback){
 
return db.query("Select * from bus_customer_table",callback);
 
},
 getbuscustById:function(id,callback){
 
return db.query("select * from bus_customer_table where cust_id=?",[id],callback);
 },

 deletebuscust:function(id,callback){
  return db.query("delete from bus_customer_table where cust_id=?",[id],callback);
 },

 updatebuscust:function(id,buscust,callback){
  return db.query("update bus_customer_table set mobile_num=?,date=?,status=?,fk_book_id=?,fk_email_id=?,amount=?,seat_num=?,age=?,bus_name=?,depart_time=?,arrive_time=? where cust_id=?",
 [buscust.mobile_num,buscust.date,buscust.status,buscust.fk_book_id,buscust.fk_email_id,buscust.amount,buscust.seat_num,buscust.age,buscust.bus_name,buscust.depart_time,buscust.arrive_time,id],callback);
 }
 
};
 module.exports=buscust;