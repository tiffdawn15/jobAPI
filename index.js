const express = require("express");
const app = express();



const jobsRouter = require("./routes/jobs")
const skillsRouter = require("./routes/skills")
const onetRouter = require("./routes/onet")




app.use('/', jobsRouter)
app.use("/skills", skillsRouter)
app.use("/onet", onetRouter)






app.listen(1234, () => console.log("Running on port 1234"));
