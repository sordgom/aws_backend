const express = require("express");
const config = require('../config/config.js');
const database = require('../config/db.js');
const databaseName = config.database;

var loanRouter = express.Router();

// Create user table
loanRouter.get("/", (req, res) => {
    let useQuery = `USE ${databaseName}`;
    database.query(useQuery, (error) => {
        if (error) 
            throw error;
        
        console.log("Using Database");
        //Change loan_status if needed
        let getApprovedLoans = "SELECT * FROM loans where loan_status=1";
        database.query(getApprovedLoans, (error,results) => {
            if (error) 
                throw error;
            return res.status(200).json(results);        
        });
    })
});

module.exports = loanRouter;
