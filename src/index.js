const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const PORT = process.env.PORT || 8000;

const app = express();  
app.use(express.json());

// adding Helmet to enhance your Rest API's security
// app.use(helmet());
// using bodyParser to parse JSON bodies into JS objects
// app.use(bodyParser.json());

// enabling CORS for all requests

app.use(cors({ credentials:true, origin:'http://localhost:3000' }));
// adding morgan to log HTTP requests
// app.use(morgan('combined'));
  
app.listen(PORT, () => {
  console.log(` Server is up and running on ${PORT} ...`);
});

app.use('/service',require('./services/router'));
