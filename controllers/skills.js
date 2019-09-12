const Skills = require("../models/Skills")


module.exports = {
    index: (req, res) => {
      Skills.find({}).then(skills => {
        res.json(skills);
      });
    },
    show:(req,res) => {
        Skills.find({name: req.params.name}).then(skills => {
            res.json(skills)
        })
    }, 
    create:(req,res) => {
        const newSkill = req.body
        Skills.create(newSkill).then(skill => res.json(skill));
        
    },
    update:(req,res) => {
        const updatedSkills = req.body

        Skills.findOneAndUpdate({name: req.params.name}, updatedSkills, {
            new: true
        })
        .then(skills => res.json(skills))
    },
    destroy: (req,res) => {
        Skills.findOneAndDelete({name: req.params.name})
        .then(skill => res.json(skill))
    }

  };