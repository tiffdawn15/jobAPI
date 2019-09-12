const Onet = require("../models/Onet")


module.exports = {
    index: (req, res) => {
      Onet.find({}).then(onet => {
        res.json(onet);
      });
    },
    show:(req,res) => {
        Onet.find({title: req.params.title}).then(onet => {
            res.json(onet)
        })
    },
    create:(req,res) => {
        const newOnet = req.body
        Onet.create(newOnet).then(onet => res.json(onet));
        
    },
    update:(req,res) => {
        const updatedOnet = req.body

        Onet.findOneAndUpdate({title: req.params.title}, updatedOnet, {
            new: true
        })
        .then(onet => res.json(onet))
    },
    destroy: (req,res) => {
        Onet.findOneAndDelete({title: req.params.title})
        .then(onet => res.json(onet))
    }

  };