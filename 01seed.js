const Jobs = require("./models/Jobs")
const Onet = require("./models/Onet")

const jobsJsonData = require("./jobs.json")
const onetJsonData = require("./onet.json")


Jobs.find({}).then(jobsDB => {
    jobsDB.forEach(jobsDocument => {
        const jobsJSON = jobsJsonData.find(jobsJsonItem => {
            return jobsJsonItem.title === jobsDocument.title
        })
        console.log(jobsDocument)
        console.log(jobsJSON)


        Onet.findOne({title: jobsJSON.title})
        .then(onetDocument => {
            console.log(onetDocument)
            jobsDocument.onet = onetDocument
            jobsDocument.save()
        })
    })
})


