Proposal For Job API: 



I want to use this API: 
https://github.com/workforce-data-initiative/skills-api/wiki/API-Overview#test-client


This API links skills and SOC codes, so you can search by a SOC code and get information on the job title and skills. . 

Silver Standard: 

link the Skills SOC Code search with the general skills information. 

Models: 

Jobs  
    uuid   
    title - link to SOC  
    normalizedJobTitle  
    parentUuid  

SOC  
    jobuuid  
    title -link to job  
    skills [ {  
        uuidForSkills  
    }]  

Skills  
    uuid  
    name  
    type  
    description  
    onetElementID  
    normalizedSkillName  


Questions I have:  
- How do I get this whole database? It looks like when you search in the URL it limits you to 20   
     Check out the links in teh Project file for software I could use.   (Have this step done by bedtime tonight)  

Before Bed Tonight:  
    Have API integrated into project.  
    Create Models  

Tomorrow morning:  
Have index.js created  
Have seedfile working  

