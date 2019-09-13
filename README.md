# jobAPI


controllerRouter.get("/", skillsController.index)
controllerRouter.get("/name/:name", skillsController.show)
controllerRouter.post("/", skillsController.create)
controllerRouter.put("/update/:name", skillsController.update)
controllerRouter.delete("/", skillsController.destroy)


Paths for API: 




 An embedded screenshot of the app
![Alt text](./README.md?raw=true "Screenshot of App")  


 Tech Used: 
In the package.json I have used the following dependencies:   

    "body": "^5.1.0",
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "mongoose": "^5.7.0",
    "parser": "^0.1.4"


    The app is deployed using Heroku.  

 Installation instructions for any dependencies:  
 1) npm init  
 2) npm install  
 3) npm install mongoose  
 4) npm install  express  
 5) npm install body-parser  
 6) npm install cors 

 Double check the package.json in to make sure the above dependencies are listed. 


 Descriptions of any unsolved problems or major hurdles you had to overcome:  

For this project I used had to clean the data so that the ONET and Jobs models will relate to each other. There are currently only a handful of jobs and related ONET codes in the models. I changed the title to match the official SOC code title and the "normalized" title is the actual title that originally presented. 

