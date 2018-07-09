## Sprint 4 report ( March 23rd , 2018 to April 13th, 2018 )

## Assigned Roles | Functions during Sprint 4

###### Developer - Alex Wang <jwang206@hawk.iit.edu>
The main task of the developer was to implement Passportjs in order to provide our web app with social media authentication. With using Passportjs, it becomes easier for the deploying different types of social media authentications. Instead of integrating each one seprately and one at a time, this allows us to input the ones we want with little hassle. The developer was responsible for finding bugs within our web app and to notify the project manager so they can be resolved.  



###### UI/UX developer - Khang Duong <kduong1@hawk.iit.edu>
The main task of the UI/UX developer for the sprint was to continue developing our Node.js server using Angular as our front end framework. The one of the tasks for this sprint was to improve our app with responsive design to that way it can be viewed and displayed on different screen sizes cleanly. The other task for this sprint was to implement the Unauthenticated Users dashboard and to use it as A/B testing with the Authenticated dashboard.    


###### IT Operations - Aury Bwashi <abwashi@hawk.iit.edu>
The main task of the IT Operator for this sprint was to be able to connect both the front end server and the database server. The next step in that process was to have the front end server and the database automate at launch for our application. This would entail us to load both the front end Node.js server with the backend MongoDB server at the same time without human intervention.   


###### Project Manager - David Powers <dpowers@hawk.iit.edu>
As the project manager,  my job was to set atomic goals for this sprint as well as milestones and collect information from teammates on the current progress and determine blockers that are preventing the project from moving forward. And prepare for sprint report.

### Sprint Four Goals
| Task                                                                                                    | Status             |
| --------------------------------------------------------------------------------------------------------|:------------------:|
| Implement Passportjs Authentication                                                                     | Completed          |
| Configure Google Authentication to bridge to User Profile                                               | In Progress        |
| Automate Build to Run On Command                                                                        | In Progress        |
| Configure Slave Database                                                                                | Not Started        |
| Implement A Unauthenticated User Dashboard                                                              | Completed          |
| Implement Media Queries to Accommodate Responsiveness                                                   | In Progress        |



### Sprint Five Goals
| Goals                                                                                                   | Roles              |
| --------------------------------------------------------------------------------------------------------|:------------------:|
| Implement Vidyo API to Dashboard                                                                        | UI/UX Developer    |
| Implement Google Transcribe API                                                                         | Developer          |
| Implement Google Translation API                                                                        | Developer          |
| Automate Build at Start                                                                                 | IT Operation       |
| Configure App to Run From GitHub Repository                                                             | IT Operation       |
| Configure Slave Database                                                                                | Developer          |
| Finish Configuring Media Queries to Accommodate Responsiveness                                          | UI/UX Developer    |
| Review/Modify Milestones according to new artifacts & Final Presentation                                | Project Manager    |

The goals that we decided to focus this sprint , are issues that were felt when we left Sprint 3 were reactionary to major elements that had been missing to that point. When Prof. Jeremy discussed with what our project was lacking, two elements of the project were brought up. The first one that he discussed was that our project had no proper authentication section of our project. This is what our Developer decided was most important for the future of our project. From there he worked on getting Passportjs to authenticate users using Google Authentication. Throughout the process , he ending up purchasing a domain on "GoDaddy.com" because as he discovered, Google won't allow Authentication from their end unless the request is from a registered domain.  The second major element was the Unauthenticated or "Public" element of our web app. This task was completely reactionary from our feedback in Sprint 3, because he had discussed having it as a feature in that presentation, but failed to implement it. However, creating an authenticated users page gave us the idea for the future, to use it as a way to conduct A/B testing on our web app, or to test different elements from at UI/UX perspective.  

### Bugs Discovered

| Bugs Discovered                                                                                         | Status               |
| --------------------------------------------------------------------------------------------------------|:--------------------:|
| Page Not Found When Enter Direct URL                                                                    | Completed - 3/31/2018|
| Login Routing Link Not Found                                                                            | Completed - 4/11/2018|

###### How Bugs were Tracked and Delegated
<img style="float: left;" src="https://github.com/illinoistech-itm/2018-itmt430-5/blob/nnDavid-local-dev/diagrams/sprint4/bugtrellocard.JPG">

 Here is an example of how we tracked and delegated one of the bugs that was discovered in our app. With the commit that was made that the issue was resolved.

 <img style="float: left;" src="https://github.com/illinoistech-itm/2018-itmt430-5/blob/nnDavid-local-dev/diagrams/sprint4/githubbugfix.JPG">


 ### Conclusion/Sprint Retrospective

The goals that we decided to focus this sprint , are issues that were felt when we left Sprint 3 were reactionary to major elements that had been missing to that point. We were focused on trying to fill the gaps that were made aware to us within our web app, and from there we were able to make great improvements on the security and infrastructure of our web app. Since this was our 4th sprint together, the group ran pretty smooth in transitioning responsibilities since this was not the first time "changing developer hats". For the next sprint I believe that we need to focus more on the developing the functionality of our app. A good deal of focus was needed on the backend and it shows when you compare our app from where we were when we started this sprint three weeks ago. So for our next sprint we need to start working and implementing the functionality that we promised to deliver in order to create a final product that we can be proud of.  
