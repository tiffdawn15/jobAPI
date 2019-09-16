# jobAPI
https://secure-falls-28082.herokuapp.com/  

Description: 
This API can be used to get an understanding of the related job titles based off of Onet's SOC codes. At the root you will have a job title with an associated "normalized" job title, then a reference to related job titles based off of the SOC code. 

Also, there is a list of skills using the skills model. 





Routes: 

Jobs/Onet Combined: 
controllerRouter.get("/", jobsController.index)  
URL:  
https://secure-falls-28082.herokuapp.com/  

Note:  The root contains the jobs and onet data. 
  

controllerRouter.get("/title/:title", jobsController.show)  
URL: URL:  
https://secure-falls-28082.herokuapp.com/title/:title  
Note: Searches for one jobs (with associated ONET code)  
  

controllerRouter.post("/", jobsController.create)
URL:  
https://secure-falls-28082.herokuapp.com/  

Note:  Create a new job at the root using "post" method.  
  
controllerRouter.put("/update/:title", jobsController.update)
URL:  
https://secure-falls-28082.herokuapp.com/update/:title  

Note:  Updated a speicifc job record  
controllerRouter.delete("/delete/:title", jobsController.destroy)
URL:  
https://secure-falls-28082.herokuapp.com/delete/:title  

Note:  Delete a specific job record 


  
Onet Specific Routes: 
  
controllerRouter.get("/", onetController.index)  
URL: https://secure-falls-28082.herokuapp.com/onet  
Note: This shows the index of the Onet json file  
  
controllerRouter.get("/title/:title", onetController.show)
URL: https://secure-falls-28082.herokuapp.com/onet/title/:title  
Note: Updated a specific title  
  
controllerRouter.post("/", onetController.create)  
https://secure-falls-28082.herokuapp.com/onet 
Note: Creates a new Onet record using the "post" method  
  
controllerRouter.put("/update/:title", onetController.update)
https://secure-falls-28082.herokuapp.com/onet/update/:title
Note:  Update a speicfic Onet code by referencing the title 
  
controllerRouter.delete("/delete/:title", onetController.destroy)  
https://secure-falls-28082.herokuapp.com/onet/delete/:title
Note:  Delete an Onet record


Skill Model Specific:  
controllerRouter.get("/", skillsController.index)  
URL:  
    https://secure-falls-28082.herokuapp.com/skills  
Note: It shows all of the skills   
  
controllerRouter.get("/name/:name", skillsController.show)  
URL:   
https://secure-falls-28082.herokuapp.com/skills/name/:name  
    Note: This will get a single skill  
      
controllerRouter.post("/", skillsController.create)  
URL:  
https://secure-falls-28082.herokuapp.com/ 
    NOTE: Creates a  new skill useing the post method at the root  
      
controllerRouter.put("/update/:name", skillsController.update)   
URL:  
https://secure-falls-28082.herokuapp.com/update/:Name  
Note: This will update a single skill  

controllerRouter.delete("/", skillsController.destroy)  
URL:  
https://secure-falls-28082.herokuapp.com/delete/:name  
Note: This will delete a skill from the Record 









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

