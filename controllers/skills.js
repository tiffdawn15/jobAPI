const Skills = require("../models/Skills")


module.exports = {
    //Show all skills
    index: (req, res) => {
      Skills.find({}).then(skills => {
        res.json(skills);
      });
    },
    //Show one skill
    show:(req,res) => {
        Skills.find({name: req.params.name}).then(skills => {
            res.json(skills)
        })
    }, 
    //Create a new skill
    create:(req,res) => {
        const newSkill = req.body
        Skills.create(newSkill).then(skill => res.json(skill));
        
    },
    //Update a skill
    update:(req,res) => {
        const updatedSkills = req.body

        Skills.findOneAndUpdate({name: req.params.name}, updatedSkills, {
            new: true
        })
        .then(skills => res.json(skills))
    },
    //Delete a skill
    destroy: (req,res) => {
        Skills.findOneAndDelete({name: req.params.name})
        .then(skill => res.json(skill))
    }

  };