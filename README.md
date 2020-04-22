# CSE-416 College For Me

# Introduction
This repo is for the development of the College For Me project that provides an online service for bother colleges and students for their admission process and track their college applications.

## Team Member:
Andrew Cao\
Maggie Zhou\
Qihong Jiang

### Front-end
 * HTML front end to send requests to the server
 * CSS and Bootstrap for styling
 
 ### Back-end
 * Current programming language in the backend is Node.js specifically the Express framework.
 * Using modules from node to scrape data from web and import data
  * Load balancing with Nginx to achieve partial concurrency
  * MongoDB database for caching user data
  
#### Set Up Instructions
Due to file limits by Github, some node modules are not provided; these dependencies have to be installed by the user.
 * (1) Express Framework
      * npm install express
      * npm install express-session
 * (2) Mongo-DB
      * npm install mongo
      * npm install mongoose
 * (3) File Reader
      * npm install fs
      * npm install path
 * (3) URL Parser
      * npm install url
