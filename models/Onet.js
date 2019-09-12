const mongoose = require("../connection")
const Schema = mongoose.Schema


const onetSchema = new Schema ({
    uuid: String,
    onetSocCode: String, 
    title: String, 
    description: String, 
    relatedJobTitles: [{
        uuid: String, 
        title: String,
        Soc: [{
            ref:"Jobs",
            type:mongoose.Schema.Types.ObjectId

        }]
    }]

})

const Onet = mongoose.model("Onet", onetSchema);

module.exports = Onet;


