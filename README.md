# jobAPI


controllerRouter.get("/", skillsController.index)
controllerRouter.get("/name/:name", skillsController.show)
controllerRouter.post("/", skillsController.create)
controllerRouter.put("/update/:name", skillsController.update)
controllerRouter.delete("/", skillsController.destroy)


jobsAPI.com/