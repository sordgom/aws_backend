const { json } = require("body-parser");
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
            if (error) {
                console.log(error.status);
            }
                
            return res.status(200).json(results);        
        });
    })
});


loanRouter.get("/contracts", (req, res) => {
    let useQuery = `USE ${databaseName}`;
    database.query(useQuery, (error) => {
        if (error) 
            throw error;
        
        console.log("Using Database");
        //Change loan_status if needed
        let getLoanContracts = "SELECT * FROM loan_contracts";
        database.query(getLoanContracts, (error,results) => {
            if (error) {
                console.log(error.status);
            }
                
            return res.status(200).json(results);        
        });
    })
});

loanRouter.post("/contracts", (req, res) => {
    let useQuery = `USE ${databaseName}`;
    let loanContract = req.body;
    database.query(useQuery, (error) => {
        if (error) 
            throw error;
        
        console.log("Using Database");
        //Change loan_status if needed
        let postLoanContracts = "INSERT INTO loan_contracts  (`loan_id`, `loan_contract_address`) VALUES ('"+loanContract.loan_id+"', '"+loanContract.loan_contract_address+"')";
        database.query(postLoanContracts, (error,results) => {
            if (error) {
                console.log(error.status);
            }
                
            return res.status(200).json(results);        
        });
    })
});

module.exports = loanRouter;
