# ITMT 430
# Team 5 Octocat - InterpretAir Project

## Team Members
1. [Alex Wang]
2. [Aury-Ken Bwashi]
3. [David Powers]
4. [Khang Duong]

---

## Project Name and Concept
Our project is called InterpretAir and it is a video chat application that uses real-time audio translation that generates transcripts in the user's desired language. The goal is to improve the communication quality between people who don’t speak the same language by utilizing existing technologies (i.e. Google Translate, Vidyo) in the form of API's and building our own product.

## Scope
This project is a web-based Real Time Communication platform used to transcribe and translate communication remotely between users who don't speak the same language. The project duration is 16 weeks starting from January 9th until April 22nd. Features that will be implemented in this time frame will be video call between two or more users (video conference/group call up to 6 users). Transcribing the video call conversations and translating the transcripts to the desired language by the user - this feature will only be implemented between two users due to the time constraint. The transcripts will be saved if the user is signed up and has an account with InterpretAir. All personal information and password will be protected using database encryption and password hashing.

#### Applications and Target Market
This tool can be used for international conferences between two businessmen who might need aid in translating. Another possible application is for users to learn new languages and speak to a native speaker in that desired language. The applications are quite broad so it's hard to estimate the number of users. Node.js and MongoDB is scalable so it should be able to support hundreds of users at this stage of development.  

---

## Industry Competitors
There are a lot of competitors out there that provide voice over IP services so these industry competitors were chosen due to the similar functionalities that they offer and the same target market. These services are the most popular ones out of the bunch and they are trying to solve similar problems that we are trying to solve.  

### [Skype/Skype Translator]
##### How do they [function]:
[Skype] is a proprietary VoIP system using its own protocol based on peer-to-peer (P2P) networking; essentially, it works by creating ad-hoc, direct communication between two computers on the Internet. When you sign on to Skype, your computer becomes one node in a global network of equal peers. Each Skype user runs a piece of software called a client that allows them to send messages to other Skype users, make calls, send files, and play real-time games. Each of the clients becomes an active part of the network and, whether it's actively sending messages or not, helps the network as a whole to locate and route traffic to other users. Within the network, some of the users with highest bandwidth and best connectivity, known as supernodes, act as traffic hubs. The network as a whole is made up of supernodes connected to one another, with each supernode linking to many ordinary nodes.

[Skype Translator] takes the words you speak, converts them into text, translates that text, and then synthesizes them into spoken words in the language of the person on the other end of the call.

![alt text](https://github.com/illinoistech-itm/2018-itmt430-5/blob/nkhang-local-dev/diagrams/midterm/skype.JPG "Skype translator")

#### How are they [built]:
The "core" functionality - making audio, video and messaging, so the shared business logic - are written in C++ and built targeting the specific platform. The Windows Skype desktop client is written mostly in Delphi, using the mentioned C++ component for the core business logic. The mobile versions are written in the native language those platforms support, so the iOS client is written in Objective C, Android in Java, Windows Phone in C#. The mobile versions use similar, but mobile optimized C++ libraries to the desktop for the core calling functions.  The other platforms - Mac, XBox, Sony Smart TV etc - all use the native development language for the given platform and similar C++ libraries.

[Skype Translator] uses machine learning. So the more you use it, the better it gets. Their voice translator currently works in 8 languages, and our text translator is available in more than 50 languages for instant messaging.

---

### [Appear.in]
##### How do they function:
Appear.in is a video collaboration tool that lets you have video conversations. The PRO package supports up to 12 people simultaneously. You can create a room with no required registration. The user can upgrade the room to PRO to customize it and for more great features.

#### How are they built:
This one is not quite popular and we couldn't find out which technology stack it's built in. Our best guess is Javascript for the client side and not sure about the server side.

![alt text](https://github.com/illinoistech-itm/2018-itmt430-5/blob/nkhang-local-dev/diagrams/midterm/appearin.JPG "Appear.in")

---

### [Google Hangouts]
##### How do they function:
Google Hangouts is a communication platform developed by Google which includes messaging, video chat, SMS and VOIP features. Hangouts allows conversations between two or more users. The service can be accessed online through the Gmail or Google+ websites, or through mobile apps available for Android and iOS. Chat histories are saved online, allowing them to be synced between devices. Google+ Hangouts users can also perform a group video chat with up to 10 users at a time. It replaces three messaging products that Google had implemented concurrently within its services, including Google Talk, Google+ Messenger, and Hangouts, a video chat system present within Google+.

Google is splitting Hangouts into two: Hangouts Chat, which is clearly gunning for Slack, and Hangouts Meet, which is all about video and audio communications. Those two are basically the enterprise counterparts to Allo and Duo.

![alt text](https://github.com/illinoistech-itm/2018-itmt430-5/blob/nkhang-local-dev/diagrams/midterm/hangouts.JPG "Google Hangouts")


##### How are they built:
There are not many current information about their current technology stack, but for
[Google Talk] (2011): The client was written in C++. The service is written in Java.
[Google+] (2011):
1. Java servlets (for  server code)
2. JavaScript (for the browser-side of the UI)
3. Closure framework (as template system)
4. HTML5 History API (to maintain pretty-looking URLs)
5. BigTable and Colossus/GFS (on top of which the backends are built)
6. MapReduce

Google Talk and Hangouts had used technology Google is licensing from Vidyo to facilitate video chats just like we are using for our web application. However they switched to open codec like Skype.

---

# Roles
| Roles            | Sprint 1           | Sprint 2           |  Sprint 3                         |
| -------------    |--------------------| -------------------|-----------------------------------|
| Project Manager  | Marika Jasinski    | Alex Wang          | Khang Duong                       |
| Developer        | Aury-Ken Bwashi    | Khang Duong        | David Powers                      |
| Junior Developer | Khang Duong        | Aury-Ken Bwashi    | David Powers/Aury-Ken Bwashi      |
| UI/UX            | Alex Wang          | David Powers       | Aury-Ken Bwashi                   |
| IT Operations    | David Powers       | Marika Jasinski    | Alex Wang                         |

---

# Goals

### [Sprint 1]
In the Sprint 1, we divided the project into different parts which we agreed, as a team, that they consist of the most critical functions of the project. We prioritized the functions of the web application and we thought we should tackle the main functions first as they are the most time consuming. The main functions include Vidyo.io API, Transcribe and Translate.

We chose to create a skeleton of the project first, then create the "empty" web pages (profile, contacts, settings) without any functionalities to have a visualised flow of the website. At the same time, IT Operations role was starting to create a shared environment using Vagrant, Packer and VirtualBox. Project Manager was responsible to create an efficient system by dividing the tasks to Trello cards and using Slack to check on the work of each role.

| Goals                                                                                                   |
| --------------------------------------------------------------------------------------------------------|
| Create a skeleton of the MEAN.js folder                                                                 |
| Welcome Page skeleton                                                                                   |  
| Profile Page skeleton                                                                                   |
| Contacts Page skeleton                                                                                  |
| Download Vagrant and Packer                                                                             |
| Begin vagrant/packer automation                                                                         |


### [Sprint 2]
Our goals for Sprint 1 were too large to tackle on so we had to break it down to smaller atomic goals. We have incorporated SnippetBot into our Slack channel to keep track of each role's process. In this way, we establish structure for each individual and it's also visible for everyone to see. By establishing transparency, we can view each other's progress and hold each other more accountable to our tasks like Toyota factory production system.

We chose these goals because they were our priority. We needed deploy keys to ensure secure deployment to Github and only from out local environments. This prevents any unauthorized access from hackers. We refined our Layout design of each page to make sure it has the necessary requirements. We had to start connecting our User login + signup with MongoDB database so the information is saved safely in our database. Since this is a Video Call Application, we wanted to begin integrating Vidyo.io API and create a simple demo to make sure it's feasible and meet all our requirements. Additionally, we kept setting the automated part of Vagrant and Packer because we needed to spend more time on from Spring 1 due to lack of knowledge.

| Goals                                                                                                   |
| --------------------------------------------------------------------------------------------------------|
| Generate Deploy keys                                                                                    |  
| Create logout action                                                                                    |
| Refine the UI Layout Design                                                                             |
| User signup with mongoDB                                                                                |
| Demo a Vidyo.io call                                                                                    |
| Authentication Integration                                                                              |
| Connect mongodb and mongoose                                                                            |  
| Download and set up Google SDK                                                                          |
| Use voice instead of audio file                                                                         |
| Integrate Vagrant and Packer: (same deployment environment with MongoDB running)                        |


### Sprint 3
This Sprint we ran into few problems and had to prioritize our goals again so we can meet the midterm requirements. We were lacking on the Operation so we shifted our focus towards the automation. We discussed as a team to set goals for the midterm which was to make sure Login and Sign Up is fully functional and integrated with MongoDB. Our UI/UX role had to refine the login and sign up form layout of the webpages, and create Dashboard page for our Video Call window for both Authenticated and Unathenticated users. Our project manager was keeping track of everyone's work and make sure everyone was on top of their task. Also, the project manager had to prepare the written report and a oral presentation. The IT Operations had to make sure everyone's environment can deploy without manual intervention.

| Goals                                                                                            |
| -------------------------------------------------------------------------------------------------|
| Review/Modify Milestones according to new artifacts                                              |
| Login UI - functional                                                                            |
| Registration UI - Functional                                                                     |
| Fix CORS issue                                                                                   |
| Revert back to working commit                                                                    |
| Unauthenticated Dashboard UI                                                                     |
| Authenticated Dashboard UI                                                                       |
| Written Report + Oral Presentation                                                               |
| Https Encryption - SSL/TLS                                                                       |


# 13 Base Project Requirements

### 1. [MEAN Stack]
MEAN is an acronym, which stands for Mongo DB (database system), Express (back-end web framework), Angular.js (front-end framework) and Node.js (back-end runtime environment). Our team is the most comfortable with Javascript and it is a modern approach to web development. JavaScript is a dynamic programming language for client-side and server-side web application development.

MEAN stack uses JSON as the format for data-interchange on all the layers. So, there is no need to use libraries for converting data during client-side and server-side interaction. JSON also allows working with external APIs (application programming interfaces) easily which is ideal for our project.

**MongoDB** will be discussed further in Data Store section.

**Express.js** is used in creating server side web applications faster and smarter, simplicity, minimalism, flexibility, scalability, easy to configure and customize, allows you to create rest API server, easy to connect with databases.

**Angular.js** is a front-end JavaScript development framework for developing single-page applications. It allows a clean way of adding interactive functions and AJAX-driven rich components on the client-side. Since, you have Node.js providing a server-side solution; there is JavaScript implementation on both client and server-side. This makes programming applications with MEAN stack very effective.

**Node.js** (8.10.0) also runs on LINUX, Windows and OS X. Node.js operates on a single thread for processing incoming HTTP requests. It uses non-blocking I/O (input-output) calls to handle multiple new incoming requests efficiently. Unlike other web servers like Apache, Node.js is extremely fast and scalable, supporting thousands of concurrent connections. Node.js uses web sockets to enable sending data to client without having the client to request it. Hence, it is an ideal choice for developing real-time web applications like chatting applications. Node.js is also supported by a large module library.

#### Node modules:
1. angular2-flash-messages
1. bcrypt
1. bcryptjs
1. cors
1. body-parser
1. cookie-parser
1. debug
1. express
1. jsonwebtoken
1. mongoose
1. morgan
1. nodemon
1. passport
1. passport-jwt
1. pug
1. serve-favicon

### 2. Operating System: [Ubuntu Linux 17.10 Distribution]
Our team chose Ubuntu for following reasons:
1. All our team members are familiar with linux based operating system.
2. It's free and doesn't cost to download or setup.
3. It's secure as it has built-in firewalls and virus protection method that makes sure you’re protected. In comparison to Windows, the malware risks associated with Ubuntu Linux are negligible.
4. It's highly customizable so we can configure it to the way we want so it will run smoothly with our web appplication,
5. Ubuntu has a strong community support and it’s one of the biggest advantages of Ubuntu over other distrubutions.
6. Low system requirements so it can run across all our laptops. The recommended hardware requirements are 700 MHz processor, 512MB RAM, and 5GB hard disk.
7. It's open source.

### 3. [MongoDB] used to store data.
We chose Mongo DB because it's great for database system when managing huge tables with tons of data. Unlike any other database, adding a field to Mongo DB is simpler as it does not require updating the entire table. Moreover, it is a NOSQL and a document model database, which is extremely flexible to use in a variety of applications. In Mongo DB, documents resemble to objects in an object-oriented programming language. A document can be queried on any field and data access is simplified by reducing the use for joins.

### 4. Data encrypted at rest
Passwords are hashed to protect personal information. We use node module called [bcrypt] to hash all the passwords of all user accounts.  The salt is a string of characters unique to each user. The hash is created by combining the password provided by the user and the salt, and then applying one-way encryption. As the hash can’t be decrypted, the only way to authenticate a user is to take the password, combine it with the salt and encrypt it again. If the output of this matches the hash, the password must have been correct.

In the future, we will try to encrypt our data at rest through MongoDB configuration because it seems a better approach and this allows us to protect all of user's data and not just passwords. The encryption occurs transparently in the storage layer; i.e. all data files are fully encrypted from a filesystem perspective, and data only exists in an unencrypted state in memory and during transmissionThe database keys are internal to the server and are only paged to disk in an encrypted format. MongoDB never pages the master key to disk under any circumstances. Only the master key is external to the server (i.e. kept separate from the data and the database keys), and requires external management.


### 5. Database [Master/Slave Replication]
As of now we have a master database and a slave replication of it. We have test data of more than 15 user accounts saved in our master database. In the next sprint, we will save more information like transcripts, call information, contacts etc. to each user. Master databases receive data from applications. Slave databases get copies of that data from the masters. Slaves are therefore read-only from the application's point of view while masters are read-write. Most web applications require a much higher ratio of reads to writes. By integrating master/slave replication, it will improve overall performance. As it distributes its queries more effiently as the master's CPU is less burdened by queries while the slave replication's CPU is less burdened by writes; so there is more CPU available to do work.
Replication is also a type of disaster recovery database backup that's more efficient than storing data to disks. With replication, you can restore your master server with replicated data instead of digging into backup files.


### 6. Use of Responsive Design
Our team will be using bootstrap because we are quite familiar with it and it's fairly easy to use. We chose bootstrap because:
1. Highly responsive due to its fluid grid layout that dynamically adjusts to proper screen resolution.
2. It saves a lot of time in terms of development. There are ready made classes which are available for us to use.
3. Highly customizable. We only need to the required functionalities for our project just by selecting on Bootstrap customize page.
4. Consistency across different webpages, as we are rotating Sprints every 3 weeks. Design must be consistent throughout the project.


### 7. Use of https
#### a. Self-signed certs
Self signed certificates encrypt communications, but provide no validation of server identity. Although they prevent eavesdropping, they leave you vulnerable to man-in-the-middle attacks. Only certificates signed by a trusted certificate authority will allow MongoDB drivers to verify the server's identity. We will be creating own private SSL Certificate Authority to dump our self-signed certificate by using [OpenSSL].

#### b. [Google Authentication] for login
We chose Google authentication because gmail is second most used email client and many working professionals have a google account. This will allow the user to sign in without going through the long signup process. This will speed up the registering process and enhance user experience. Sometimes users refuse to use a service if a tedious sign up process is a requirement.

#### c. [SQRL]
We will definitely explore SQRL after we finish the main components of the web application. We already use Google authentication and that's enough for the current stage. Adding SQRL at this stage is redundant, however we would like to implement it later on. This would like under Optional Requirement for us.


### 8. Use of user authentication
User Authentication and authorization is important because we have to ensure each user is only allowed to see their account and their information and not other information of other users. We have to prevent unauthorized access to the information in our database.

Our MEAN Stack Authentication [Flow]:
1. User data is stored in MongoDB, with the passwords hashed
1. CRUD functions are built in an Express API — Create (register), Read (login, get profile), Update, Delete
1. An Angular application calls the API and deals with the responses
1. The Express API generates a JSON Web Token (JWT) upon registration or login, and passes this to the Angular application
1. The Angular application stores the JWT in order to maintain the user’s session
1. The Angular application checks the validity of the JWT when displaying protected views
1. The Angular application passes the JWT back to Express when calling protected API routes.
1. JWTs are preferred over cookies for maintaining the session state in the browser. Cookies are better for maintaining state when using a server-side application.

We will be using [Passport] to handle the Express Authentication. Passport is a Node module that simplifies the process of handling authentication in Express. It provides a common gateway to work with many different authentication “strategies”, such as logging in with Facebook, Twitter or Oauth. The strategy we’ll use is called “local”, as it uses a username and password stored locally.

Unathenticated users can use the platform without logging in, by just creating a room and inviting other users in. Transcripts are not stored in their account but end of each call, there will be a summary page with the option to download or email the transcript to themselves.

Authenticated users will have their own account where they can store their transcripts and have a list of contacts. The list of contacts allows the user to chat or call them when they are online.

For Adminstrative users, we haven't created a page for them as of now. We will incorporate this feature in the next sprint for management and restore feature in case of a problem after new code deployment, we can revert to the previous commit. User Interface will be useful in managing and help to tranfer the management process easily to a new team member. In this way, we don't need to depend on just one system administrator to restore the problem.

[Flow]: https://www.sitepoint.com/user-authentication-mean-stack/


### 9. Creation of Dev Environment (local laptop)
In the technology value stream, it is critical to reduce the number of handoffs. Having code to go through several steps to go from version control into production environment. Besides sitting in the queue for a long time, another drawback to multi-layered code production is the possibility of a loss of knowledge with each handoff.

First we need to define the project requirement before building and configuring environments on demand as this will help us create environments quickly and make sure it's stable, reliable, consistent and secure. Operations team can create it quickly and Dev team can build, run and test their code on different levels.  

To avoid multiple handoff from each member to another, we need to structure our team to increase their independence and make sure everyone is using the same environment so we can deploy the code successfully. This is why we are using Vagrant, Packer and VirtualBox as our builder. Each member has configured the identical environment to make sure everyone's code can run by other members. We are using Git version control for code management. Most of our configurations and customizations are done by scripts under provisioners in our VagrantFile. We have a box for web server and another box for a database. We will be implementing Test and Production later in next spring using Docker and containers.  

Use of "Automation"
1. Copying a virtualized environment (Vagrant Sccript)
2. Building an automated environment creating process that starts from "bare metal" (Packer, vanilla)
3. Using "Infrastructure as code" configuration management tool (Puppet and chef) - This will be implemented later
4. Assembling an environment from a set of virtual images or containers (Vagrant for now, Docker later)
5. Spinning up a new environment in a public cloud (AWS future implementation)

We also focus on making infrastructure easier to rebuild than to repair as we can "Vagrant Destroy" and Vagrant up again in case there were issues with code deployment. This repeatable environment creation systems ensurure no manual environment production changes are allowed.


### 10. Layout Design
Layout design is simple and user friendly. Not cluttered, it incorporates minimalistic design so it's clear for the user what each function does, but still with all the required functionalities to run our web application. We are using Bootstrap to ensure the consistency and simplicity of the design. We will customize the colors, fonts and other usability features more in the next sprint.

**Welcome Page**

![alt text](https://github.com/illinoistech-itm/2018-itmt430-5/blob/master/diagrams/midterm/welcome-page.JPG "Welcome Page")

---

**Login Page**

![alt text](https://github.com/illinoistech-itm/2018-itmt430-5/blob/master/diagrams/midterm/login.JPG "Login Page")

---

**Registration Page**

![alt text](https://github.com/illinoistech-itm/2018-itmt430-5/blob/master/diagrams/midterm/sign-up.JPG "Registration Page")

---

**[Color Palette]**

![alt text](https://github.com/illinoistech-itm/2018-itmt430-5/blob/master/diagrams/midterm/color-palette.JPG "Color Palette")

Fonts: (Helvetica Neue, Helvetica, and Arial)

---

### 11. Management of Visio
We created diagrams of User workflow and Application architecture for MEAN stack in Visio to help the team understand the processes of our web application both from the high level point of view and the technology point of view.

#### User Workflow 1
![alt text](https://github.com/illinoistech-itm/2018-itmt430-5/blob/master/diagrams/midterm/user-work-flow-1.JPG "User Workflow 1")

---

#### User Workflow 2
![alt text](https://github.com/illinoistech-itm/2018-itmt430-5/blob/master/diagrams/midterm/user-work-flow-2.JPG "User Workflow 1")

---

#### Application Architecture
![alt text](https://github.com/illinoistech-itm/2018-itmt430-5/blob/master/diagrams/midterm/application-architecture.JPG "Application Architecture")

---

### 12. Management of Project progress
#### 1. [Trello]
We chose to use Trello because it's a very efficient tool that provides many great functionalities such as:
1. It's free!
2. Real time updates are super fast!
3. A board for a project and you can see all items on one page.
4. Creating a card and assign to a member to that ticket is simple and easy.
5. Adding new member is simple - just need to invite by email.
6. Highly Customizable! You can comment on cards, add deadlines, add team members working on the same card, and add different labels.

Trello allows us to make our work visible so this prevents work piling up or being stalled in the technology value stream.

![alt text](https://github.com/illinoistech-itm/2018-itmt430-5/blob/nkhang-local-dev/diagrams/midterm/trello.JPG "Trello")

These cards help us stay on top of our tasks and see what everyone is doing. The cards hold us accountable and responsible for different tasks. If someone runs into a problem, they can ask for help or assistance on slack or in weekly meetings. This promotes transparency and responsibility of each member. This facilitates fast sharing of information.

#### 2. [Slack]
Slack is used extensively to communicate and chat about our progress and problems. Share technologies that could be implemented in our project and see what is feasible. We reply on Slack much faster than by using email so problems are solved faster. Whenever one member found a problem with something, we used slack to posted the problem to transform local discoveries into global Improvement. In a similar way how an error report is accessible to everyone in any area of an organization. The problem can also be view from the GitHub integration with slack. This allow us to tacke the problem together and solve it faster.

We chose Slack because it allows us to take communication to another level with functionalities like:
1. Different Channels help us organize different conversations either with entire team or private conversations. There are channels for different topics of the project as well.
2. File sharing/images/code snippets sharing are very easy to use, if we need to send each other screenshots.
3. We have integrated our Slack with GitHub and Snippetbot.
... This allow us to see all the GitHub commits by each member. It will let us see know who is working on what and what changes have been made in real time.
... Snippetbot is used for personal tracking of your tasks. You can input your tasks under "Done", "Next" and "Blocking". Our snippetbot allow us to break down work in small batch sizes. As we found out in Sprint 1, large batch sized led to long lead times and poor quality results.

![alt text](https://github.com/illinoistech-itm/2018-itmt430-5/blob/master/diagrams/midterm/snippetbot.png "snippetbot")

4. Search boxes allow us find different part of conversations very quickly.
5. We can use it on the phone or on our laptops.

![alt text](https://github.com/illinoistech-itm/2018-itmt430-5/blob/nkhang-local-dev/diagrams/midterm/slack.JPG "Slack")


#### 3. [GitHub]
Github is version control system that help us manage and store revisions of our project. GitHub is becoming very popular and almost a requirement at most work places. We chose this because it is a useful tool to know and help us contribute our code in a very efficient way from remote locations. It takes care of this problem by keeping track of all the changes that have been pushed to the repository by all members. It allows us to have a version history of our code so that previous versions are not lost with every iteration. It can also be integrated with Amazon and Google Cloud if we decide to host our project on Amazon cloud later on. The Markdown is a simple text editor that allow us describe our projects and also great for documentation.

Additionaly, it minimizes the risk as a team member can repeatedly and reliably reproduce entire working software system in case of disaster, also known as "Single repository of truth". To make sure a team member can reproduce this repository, our team needs to ensure there are all components such as:
1. All application code and dependencies (Libraries)
1. All the environment creation tools and artifacts (Puppet or Chef recipes)
1. Any file used to create containers (Docker definition or composition files)
1. All Project Artifacts (Requirement documentation, deployment procedures, release notes,etc.)
1. All cloud configuration files (AWS, Azure etc.)
1. Any other script or configuration information to create infrastructure that supports multiple services (Database management systems, configuration rules for firewalls)



![alt text](https://github.com/illinoistech-itm/2018-itmt430-5/blob/nkhang-local-dev/diagrams/midterm/GitHub.JPG "Github")


#### 4. GitHub Issues to resolve bug posts from UI/UX tester
So far we haven't dealt with Github issues from UI/UX tester because our web pages are still very simple. Once we start customizing the layout and the functionalities of the website more, we will deal with Github issues to resolve bug posts. Recently we just received a "Security Vulnerability" GitHub issue with our .json file, which we have resolved. As you can see below:

![alt text](https://user-images.githubusercontent.com/118333/37671407-aa68bbf0-2c39-11e8-8d22-dff062ffdf1e.png "Security Vulnerability")

---

### 13. 15 real "test" users and proper data to test functionality of a system
Users accounts are stored in the database server after the user inputs their personal information in the registration form. There are more than 15 test users that can login to the authenticated site which allows them use the main functionalities and store transcripts after phone call. This data is used to test the functionality of the databases. In the next sprint, we will save more information like transcripts, call information, contacts etc. to each user.

---

# Trello and Github goal mapping
### Generate Deploy Key
We generated our deploy keys that allow us to pull or clone our GitHub repository over SSH.

![alt text](https://github.com/illinoistech-itm/2018-itmt430-5/blob/nkhang-local-dev/diagrams/midterm/deploy%20key.JPG "deploy key")

---

### Home Page
We created a home page that welcomes the user to the site. We added some html and css to add certain buttons like Login and Sign up.

![alt text](https://github.com/illinoistech-itm/2018-itmt430-5/blob/nkhang-local-dev/diagrams/midterm/home%20page.JPG "Github")

---

### Login User Interface + Functions
We created a login form to allow user access their information. We added router link to login component for login button. Make sure the login information is validated and matches the user information in the database. If it all matches then the user is signed in, otherwise it will show an error.

![alt text](https://github.com/illinoistech-itm/2018-itmt430-5/blob/nkhang-local-dev/diagrams/midterm/login1-goalmapping.JPG "Login")

---

### Logout Action
We created a logout button for different pages and allows the user to logout from the website.

![alt text](https://github.com/illinoistech-itm/2018-itmt430-5/blob/nkhang-local-dev/diagrams/midterm/logout.JPG "Logout")

---

### Sign Up User Interface + Functions
We created a Sign Up form for our new users who would like to join. All of the fields are validated and if it's written in the correct format, all the user information will be stored in the MongoDB database. The password will be hashed using bcrypt node module. So next time, the user can login with their credentials.

![alt text](https://github.com/illinoistech-itm/2018-itmt430-5/blob/nkhang-local-dev/diagrams/midterm/SignUp.JPG "Sign Up")

---

### CORS Issue
Here we ran into a Cross-origin resource sharing (CORS) issue. This was a problem with Express.js and we couldn't access the backend to request for the information. So we needed to add different modules and fix the url to post correctly to the backend.

![alt text](https://github.com/illinoistech-itm/2018-itmt430-5/blob/nkhang-local-dev/diagrams/midterm/CORS.JPG "CORS Issue")

---

### Web Server Packer Image
We were building the web server package and needed to customize to our web server by adding scripts in the post script, firewall, vagrant key. We also deleted some unnecessary packages and locked files. There were many commits to configure packer to our desired configuration.

![alt text](https://github.com/illinoistech-itm/2018-itmt430-5/blob/nkhang-local-dev/diagrams/midterm/web%20server%20package%20image.JPG " Web Server Packer Image")

---

### Vagrant & Automated Deploy
We updated the vanilla ubuntu and added vagrant key. Added some test IP addresses in our vagrant file and distributed the packer-vagrant files. This was part of the process of automated deployment, we added some provisioners in the vagrant file and edited some parts to our project.

![alt text](https://github.com/illinoistech-itm/2018-itmt430-5/blob/nkhang-local-dev/diagrams/midterm/Vagrant-automated-deploy.JPG "Vagrant & Automated Deploy")

---

### Database
We were configuring the database packer file to allow us host our master database. This took us a while to do and we are still having issues with it. After reading up more on MongoDB and packer, we managed to have a very basic database.
![alt text](https://github.com/illinoistech-itm/2018-itmt430-5/blob/nkhang-local-dev/diagrams/midterm/database.JPG "Database")

---

### Written report
Project Manager wrote the report by gathering all the information and research online.
![alt text](https://github.com/illinoistech-itm/2018-itmt430-5/blob/nkhang-local-dev/diagrams/midterm/written%20report.JPG "Written report")

---
# What we learned
1. Automation is difficult and we have a long way to go until Continuous Integration is integrated
1. Breaking down large goals to atomic goals is critical, which we learned from Sprint 1
1. We need to make smaller and more frequent commits - this really makes fixes easier.
1. A lot of errors will occur during building packer, runinng scripts, provisioners etc. - Double the estimated time
1. Once environment is properly set up with automated deploy and continuous integration - time to focus on development of main functions of the web application
---

# New plans/techniques
1. Better Continuous Integration to ensure our collaboration will run smoothly and we will solve and locate problems faster if they are encountered early on.
2. Integration of external APIs: Vidyo.io, Google Authentication, Google Translate to help us with transcribe and translation.
3. MongoDB configuration of data at rest.
4. MongoDB's network traffic - use of [TLS/SSL] (Transport Layer Security/Secure Sockets Layer)
5. Saving Transcripts for authenticated users (with MongoDB)
6. Transcribing from life audio feed from video call and not from audio file.
7. Docker implementation with Containers

There is still a long way for us to go and we hope to accomplish all these goals for the next 2 sprints. These are of course "big picture" goals, they will need to be broken down to smaller atomic goals and divided to each role. There are areas we are not quite familiar so a lot of prior research is also requireed before implementation.

---

# Sources
[built]: https://www.quora.com/What-is-Skype-coded-in
[function]: http://www.explainthatstuff.com/how-voip-works.html
[Skype Translator]: https://blogs.skype.com/news/2014/12/15/skype-translator-how-it-works/
[Google+]: https://www.quora.com/What-are-the-programming-languages-used-in-making-Google+
[Google Talk]: https://www.quora.com/What-language-is-Google-Talk-written-in
[Master/Slave Replication]: https://www.quora.com/What-are-Master-and-Slave-databases-and-how-does-pairing-them-make-web-apps-faster
[Passport]: http://www.passportjs.org/
[SQRL]: https://www.grc.com/sqrl/sqrl.htm
[GitHub]: https://github.com/
[Slack]: https://slack.com/
[Trello]: https://trello.com/
[Color Palette]: http://colormind.io/bootstrap/
[Google Authentication]: https://developers.google.com/identity/sign-in/web/
[MEAN Stack]: mean.io
[Sprint 1]: https://github.com/illinoistech-itm/2018-itmt430-5/blob/nkhang-local-dev/reports/sprint-01.md
[Sprint 2]: https://github.com/illinoistech-itm/2018-itmt430-5/blob/nkhang-local-dev/reports/sprint-02.md
[Ubuntu Linux 17.10 Distribution]: https://www.ubuntu.com/desktop/1710
[bcrypt]: https://www.npmjs.com/package/bcrypt
[TLS/SSL]: https://medium.com/@rajanmaharjan/secure-your-mongodb-connections-ssl-tls-92e2addb3c89
[Google Hangouts]: https://hangouts.google.com/
[Skype/Skype Translator]: https://www.skype.com/en/features/skype-translator/
[Skype]: https://www.skype.com/en/
[Appear.in]: appear.in
[MongoDB]: https://www.mongodb.com/
[OpenSSL]: https://www.openssl.org/
[Alex Wang]: https://github.com/jwang206
[Aury-Ken Bwashi]: https://github.com/aurybwa
[David Powers]: https://github.com/dpowers3
[Khang Duong]: https://github.com/khangduong
1. Kim, G., Humble, J., Debois, P., & Willis, J. (2016). DevOps Handbook. IT Revolution Press.
1. Bwashi, A.-K., & Fuseini-Codjoe, S. (2018). Chapter 2, The First Way: The Principles of Flow. Presentation presented in ITMT 430 class at Illinois Institute of Technology, Chicago, IL
1. Ore, & Erin (2018). Chapter 4, The First Way: The Principles of Flow. Presentation presented in ITMT 430 class at Illinois Institute of Technology, Chicago, IL
1. Sobel, D., & Majewski, S. (2018). Chapter 5-6, The First Way: The Principles of Flow. Presentation presented in ITMT 430 class at Illinois Institute of Technology, Chicago, IL
1. Giaimo, M., & Vince, M. (2018). Chapter 9, The First Way: The Principles of Flow. Presentation presented in ITMT 430 class at Illinois Institute of Technology, Chicago, IL
1. Cheng, A., & shakil, J. (2018). Chapter 11, The First Way: The Principles of Flow. Presentation presented in ITMT 430 class at Illinois Institute of Technology, Chicago, IL
1. Francis, T., & Alade, M. (2018). Chapter 12, The First Way: The Principles of Flow. Presentation presented in ITMT 430 class at Illinois Institute of Technology, Chicago, IL

### Images & Screenshots
1. Skype Translator image: https://www.matinee.co.uk/blog/skype-translator-is-now-available-to-everyone-on-windows/
1. ppear.in screenshot https://appear.in/khangd
1. Hangouts screenshot: https://hangouts.google.com/
1. Trello screenshot: https://trello.com/b/NjT0ik6O/team-5-2018
1. Color palette: http://colormind.io/bootstrap/
1. GitHub screenshot: https://github.com/illinoistech-itm/2018-itmt430-5
