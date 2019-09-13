const express = require('express');
const controllerRouter = express.Router();
const skillsController = require("../controllers/skills")

controllerRouter.get("/", skillsController.index)
controllerRouter.get("/name/:name", skillsController.show)
controllerRouter.post("/", skillsController.create)
controllerRouter.post("/update/:name", skillsController.update)
controllerRouter.delete("/delete/:name", skillsController.destroy)

module.exports = controllerRouter;
