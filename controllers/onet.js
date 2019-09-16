const Onet = require("../models/Onet")


module.exports = {
    //Show all onet records
    index: (req, res) => {
      Onet.find({}).then(onet => {
        res.json(onet);
        console.log(Onet.relatedJobTitles
            )
      });
    },
    //Show an individual onet record
    show:(req,res) => {
        Onet.find({title: req.params.title}).then(onet => {
            res.json(onet)
        })
    },
    //Create a new onet record
    create:(req,res) => {
        const newOnet = req.body
        Onet.create(newOnet).then(onet => res.json(onet));
        
    },
    //Udpate an onet record
    update:(req,res) => {
        const updatedOnet = req.body

        Onet.findOneAndUpdate({title: req.params.title}, updatedOnet, {
            new: true
        })
        .then(onet => res.json(onet))
    },
    //Delete an onet record
    destroy: (req,res) => {
        Onet.findOneAndDelete({title: req.params.title})
        .then(onet => res.json(onet))
    }

  };