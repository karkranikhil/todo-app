// Export mongoose
const  mongoose = require("mongoose");


//Assign MongoDB connection string to Uri and declare options settings
const uri = `mongodb+srv://${process.env.REACT_APP_DB_USER}:${process.env.REACT_APP_DB_PASS}@todocluster.4vnhp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

// Declare a variable named option and assign optional settings
const  options = {
    useNewUrlParser:  true,
    useUnifiedTopology:  true
};

// Connect MongoDB Atlas using mongoose connect method
mongoose.connect(uri, options).then(() => {
    console.log("Database connection established!");
    },
    err  => {
    {
        console.log("Error connecting Database instance due to:", err);
    }
});