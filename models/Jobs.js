       const mongoose = require("../jobs.json")
       const Schema = mongoose.Schema
       
       const jobsSchema = new Schema ({
           uuid: String, 
           title: String, 
           normalizedJobTitle: String, 
           parentUuid: String
       })
       

       const Jobs = mongoose.model("Jobs", jobsSchema);

        module.exports = Jobs;
