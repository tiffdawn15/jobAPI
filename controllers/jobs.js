const Jobs = require("../models/Jobs")


module.exports = {
    index: (req, res) => {
      Jobs.find({})
      .populate("onet")
      .then(jobs => {
        res.json(jobs);
      });
    },

    show:(req,res) => {
        Jobs.find({title: req.params.title}).then(jobs => {
            res.json(jobs)
        })
    },
    create:(req,res) => {
        const newJobs = req.body
        Jobs.create(newJobs).then(job => res.json(job));
        
    }, 
    update:(req,res) => {
        const updatedJobs = req.body

        Jobs.findOneAndUpdate({title: req.params.title}, updatedJobs, {
            new: true
        })
        .then(jobs => res.json(jobs))
    },
    destroy: (req,res) => {
        Jobs.findOneAndDelete({title: req.params.title})
        .then(jobs => res.json(jobs))
    }

  };
  