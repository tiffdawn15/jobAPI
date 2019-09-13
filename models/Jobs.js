       const mongoose = require("../connection")
       const Schema = mongoose.Schema
       
       
       const jobsSchema = new Schema({
           
           title: String, 
           normalized: String, 
           onet: {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Onet",

        }
       })
       

       const Jobs = mongoose.model("Jobs", jobsSchema);

        module.exports = Jobs;
