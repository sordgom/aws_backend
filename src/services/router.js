const { json } = require("body-parser");
const express = require("express");
const config = require('../config/config.js');
const database = require('../config/db.js');
const databaseName = config.database;
const tableName = config.tablename;

var router = express.Router();


// Create user table
router.get("/", (req, res) => {
    let useQuery = `USE ${databaseName}`;
    database.query(useQuery, (error) => {
        if (error) 
            throw error;
        
        console.log("Using Database");
        //Change the query accordingly

        let query = `SELECT * FROM ${tableName}`;
        database.query(query, (error,results) => {
            if (error) {
                console.log(error.status);
            }
                
            return res.status(200).json(results);        
        });
    })
});


router.post("/data", (req, res) => {
    let useQuery = `USE ${databaseName}`;
    let data = req.body;
    database.query(useQuery, (error) => {
        if (error) 
            throw error;
        console.log("Using Database");
        //Change the query accordingly
        let query = "INSERT INTO table  (`data1`, `data2`) VALUES ('"+data.data2+"', '"+data.data1+"')";
        database.query(query, (error,results) => {
            if (error) {
                console.log(error.status);
            }
                
            return res.status(200).json(results);        
        });
    })
});

module.exports = router;
