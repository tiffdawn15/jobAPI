const mongoose = require("../connection")
const Schema = mongoose.Schema


const onetSchema = new Schema ({
    onetSocCode: String, 
    title: String, 
    description: String, 
    relatedJobTitles: [{
        uuid: String, 
        title: String,
        
    }]

})

const Onet = mongoose.model("Onet", onetSchema);

module.exports = Onet;


