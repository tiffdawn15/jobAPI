const mongoose = require("../connection")
const Schema = mongoose.Schema


const onetSchema = new Schema ({
    soc: String, 
    title: String, 
    description: String, 
    related: [{
        uuid: String, 
        title: String,
        
    }]

})

const Onet = mongoose.model("Onet", onetSchema);

module.exports = Onet;


