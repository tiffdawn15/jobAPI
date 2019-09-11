const mongoose = require('mongoose')


//THis connects our db to our application 

mongoose.connect("mongodb://localhost/jobs_db", { useNewUrlParser: true });



//Tells program to use ES6 promises 
mongoose.Promise = Promise;

//Tells us the state of our connection with a number 2 (if it works) 0 (if it doesn't work)
console.log(mongoose.connection.readyState)

//Exporting the files we create to mongoose. Module is  a nodeJS thing
module.exports = mongoose;
