Proposal For Job API: 



I want to use this API: 
https://github.com/workforce-data-initiative/skills-api/wiki/API-Overview#test-client


This API links skills and SOC codes, so you can search by a SOC code and get information on the job title and skills. . 

Silver Standard: 

link the Skills SOC Code search with the general skills information. 

Models: 

Jobs: 
    uuid
    title - link to SOC
    normalizedJobTitle
    parentUuid

SOC: 
    jobuuid
    title -link to job
    skills [ {
        uuidForSkills
    }]

Skills: 
    uuid
    name
    type
    description
    onetElementID
    normalizedSkillName


