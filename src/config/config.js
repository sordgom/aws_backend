const db = {
  // host: "us-cdbr-east-06.cleardb.net",
  // user: "b8e6577e968fd0",
  // password: '12595785',
  // database: "heroku_eaf6a68c2f4162b"
  connectionLimit: 100,
  host:'develop-myhomecrowd-com.clksafefzfha.ap-southeast-1.rds.amazonaws.com',
  user:'adminroot',
  password:'nopassword',
  database:'develop_mhc_db',
  port: 3306,
  debug: false,
  multipleStatements: true
};
  
module.exports = db;
//mysql://b8e6577e968fd0:12595785@us-cdbr-east-06.cleardb.net/heroku_eaf6a68c2f4162b?reconnect=true
