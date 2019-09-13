const Jobs = require("./models/Jobs")
const Skills = require("./models/Skills")
const Onet = require("./models/Onet")


const jobsJsonData = require("./jobs.json")
const skillsJsonData = require("./skills.json")
const onetJsonData = require("./onet.json")


const jobsSeedData = jobsJsonData.map(jobsJson => {
    const jobsData = {};

    jobsData.uuid = jobsJson.uuid;
    jobsData.title = jobsJson.title;
    jobsData.normalized = jobsJson.normalized;

    return jobsData;
})





Jobs.deleteMany({})
    .then(() => {
        Jobs.create(jobsSeedData)
        .then(jobs => console.log(jobs))
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))


Skills.deleteMany({})
    .then(() => {
        Skills.create(skillsJsonData)
        .then(skills => console.log(skills))
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
Onet.deleteMany({})
    .then(() => {
        Onet.create(onetJsonData)
        .then(onet => console.log(onet))
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))