const mongoose = require("../jobs.json")
const Schema = mongoose.Schema

const relatedJobTitlesSchema = new Schema({
    uuid: String, 
    title: String
})

const onetSchema = new Schema ({
    uuid: String,
    onetSocCode: String, 
    title: String, 
    description: String, 
    relatedJobTitles = [relatedJobTitlesSchema]

})

const Onet = mongoose.model("Onet", onetSchema);

module.exports = Onet;


