       const mongoose = require("../connection")

       const Schema = mongoose.Schema

       const skillsSchema = new Schema ({
           uuid: String, 
           name: String, 
           type: String, 
           description: String, 
 
       })
       
       
       const Skills = mongoose.model("Skills", skillsSchema);

       module.exports = Skills;

       
       
    