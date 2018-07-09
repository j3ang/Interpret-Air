# Sprint 3 report

## Assigned Roles 

###### IT Operations - Alex Wang <jwang206@hawk.iit.edu>
The main task for IT Operations was to ensure all of our laptops could deploy for the midterm presentation. He had to make sure there is no manual intervention and fuly automated using scripting and customization within Packer and post install scripts. This was our top priority as in previous sprints we didnt fully automate the deployment so some work was required to meet the midterm deliverable.  

###### Project Manager - Khang Duong <kduong1@hawk.iit.edu>
The project manager set realistic goals for the midterm that meet the midterm deliverables and assigned the tasks to each member. Also made some engineering decisions to shift our focus towards automation and deployment as the midterm requirement is for all members to be deployed. The project manager also worked on the midterm report to report the overall progress from all Sprints and present it in front of the class. 


###### UI/UX - Aury Bwashi <abwashi@hawk.iit.edu>
The UI/UX worked closely with the developer to make sure the Login and Registration page are fully functional and have an user friendly interface. The UI/UX has also absorbed the role of junior developer so for this sprint Aury has also helped to fix the CORS issue as he was assisting our main developer. 

###### Developer - David Powers <dpowers@hawk.iit.edu>
The developer was working to fix the CORS issue that we had from previous sprint and also incorporating bcrypt.js node module to hash the user passwords and store them safely. These two tasks lie under "Login and Registration Function" card. Also we ran into some GitHub issues that needed to revert back to some commits. Some of us were new to using github so this was part of our learning process. 


### Sprint 3 Goals
| Goals                                                                                            |Status              |
| -------------------------------------------------------------------------------------------------|--------------------|
| Review/Modify Milestones according to new artifacts                                              |Completed           |
| Login UI - Functional                                                                            |Completed           |
| Registration UI - Functional                                                                     |Completed           |
| Fix CORS issue                                                                                   |Completed           |
| Revert back to working commit                                                                    |Completed           |
| Unauthenticated Dashboard UI                                                                     |In Progress         |
| Authenticated Dashboard UI                                                                       |In Progress         |
| Written Report + Oral Presentation                                                               |Completed           |
| Https Encryption - SSL/TLS                                                                       |Completed           |

## What we learned from this Sprint
1. Automation is difficult and we have a long way to go until Continuous Integration is integrated
1. We need to make smaller and more frequent commits - this really makes fixes easier.
1. A lot of errors occured during building packer, runinng scripts, provisioners etc.
1. Once environment is properly set up with automated deploy and continuous integration - time to focus on development of main functions of the web application 

## Next steps for Sprint 4
1. Better Continuous Integration to ensure our collaboration will run smoothly and we will solve and locate problems faster if they are encountered early on.
2. Slave Database
3. Google Authentication with gmail
4. MongoDB configuration of data at rest.
5. MongoDB's network traffic - use of [TLS/SSL] (Transport Layer Security/Secure Sockets Layer)
6. Media Queries for responsiveness
7. Build Automation 

### Sprint Four Goals
| Task                                                                                                    | Role               |
| --------------------------------------------------------------------------------------------------------|:------------------:|
| Implement Passportjs Authentication                                                                     | Developer          |
| Configure Google Authentication to bridge to User Profile                                               | Junior Developer   |
| Automate Build to Run On Command                                                                        | IT Operations      |
| Configure Slave Database                                                                                | Developer          |
| Implement A Unauthenticated User Dashboard                                                              | UI/UX              |
| Implement Media Queries to Accommodate Responsiveness                                                   | UI/UX              |

### Trello and GitHub Goal Mapping 
### CORS Issue
Here we ran into a Cross-origin resource sharing (CORS) issue. This was a problem with Express.js and we couldn't access the backend to request for the information. So we needed to add different modules and fix the url to post correctly to the backend.

![alt text](https://github.com/illinoistech-itm/2018-itmt430-5/blob/nkhang-local-dev/diagrams/midterm/CORS.JPG "CORS Issue")

---

### Vagrant & Automated Deploy
We updated the vanilla ubuntu and added vagrant key. Added some test IP addresses in our vagrant file and distributed the packer-vagrant files. This was part of the process of automated deployment, we added some provisioners in the vagrant file and edited some parts to our project.

![alt text](https://github.com/illinoistech-itm/2018-itmt430-5/blob/nkhang-local-dev/diagrams/midterm/Vagrant-automated-deploy.JPG "Vagrant & Automated Deploy")

---

### Login User Interface + Functions
We created a login form to allow user access their information. We added router link to login component for login button. Make sure the login information is validated and matches the user information in the database. If it all matches then the user is signed in, otherwise it will show an error.

![alt text](https://github.com/illinoistech-itm/2018-itmt430-5/blob/nkhang-local-dev/diagrams/midterm/login1-goalmapping.JPG "Login")

---

### Conclusion
This Sprint we ran into few problems and had to prioritize our goals again so we can meet the midterm requirements. We were lacking on the Operation so we shifted our focus towards the automation. We discussed as a team to set goals for the midterm which was to make sure Login and Sign Up is fully functional and integrated with MongoDB. Our UI/UX role had to refine the login and sign up form layout of the webpages, and create Dashboard page for our Video Call window for both Authenticated and Unathenticated users. Our project manager was keeping track of everyone's work and make sure everyone was on top of their task. Also, the project manager had to prepare the written report and a oral presentation. The IT Operations had to make sure everyone's environment can deploy without manual intervention. For next sprint, we have to keep going with build automation as there is always gaps to improve on. The responsiveness of the website is something we also have to think about the next sprint. Slowly we should be gradually incorporating the external APIs which assist with the core functionalities of our web app like Vidyo.api for video calling and hopefully transcribing video calls. 
