const express = require('express');
const controllerRouter = express.Router();
const onetController = require("../controllers/onet")

controllerRouter.get("/", onetController.index)
controllerRouter.get("/title/:title", onetController.show)
controllerRouter.post("/", onetController.create)
controllerRouter.put("/update/:title", onetController.update)

module.exports = controllerRouter;
