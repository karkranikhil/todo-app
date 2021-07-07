// require express
const  express = require("express");
var cors = require('cors')

//load env variables
require('dotenv').config()
console.log(process.env.REACT_APP_DB_USER)
// create express app
const  app = express();

app.use(cors());
app.use(express.urlencoded())
app.use(express.json())

// Import DB Connection
require("./config.js");

// Import API route
var routes = require('./routes'); //importing route
routes(app);

// define port to run express app
const  port = process.env.PORT || 5000;

// use middleware on express app
app.use(express.json());

// Add endpoint
app.get('/', (req, res) => {
    res.send("Welcome to our Todo App");
    });
    
// Listen to server
app.listen(port, () => {

console.log(`Server running at http://localhost:${port}`);
});