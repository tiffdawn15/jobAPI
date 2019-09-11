       const mongoose = require("../skills.json")

       const Schema = mongoose.Schema

       const skillsSchema = new Schema ({
           uuid: String, 
           name: String, 
           type: String, 
           description: String, 
           onetElementId: Number, 
           normalizedSkillName: String
       })
       
       
       const Skills = mongoose.model("Skills", skillsSchema);

       module.exports = Skills;

       
       
    