const express = require("express");
const parser = require("body-parser")
const cors = require("cors")
const app = express();



const jobsRouter = require("./routes/jobs")
const skillsRouter = require("./routes/skills")
const onetRouter = require("./routes/onet")

app.use(cors())
app.use(parser.urlencoded({extended: true}));
app.use(parser.json())



app.use('/', jobsRouter)
app.use("/skills", skillsRouter)
app.use("/onet", onetRouter)



app.set("port", process.env.PORT || 1234);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});


