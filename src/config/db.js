const mysql = require("mysql");
const config = require('./config.js');
  
var db_connect = mysql.createPool(config);
db_connect.getConnection(function(err){
    if (err) console.log('Errors', err)
    console.log('connected');
})

module.exports = db_connect
