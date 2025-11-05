## RESTful Video Management API

# Project Overview
This project is the culmination of the APIs in Action Bootcamp, demonstrating the end-to-end development of a robust backend REST API.
Built on the Node.js, Express, and MongoDB (Mongoose) stack, this application provides full CRUD (Create, Read, Update, Delete) functionality for managing video records. The API includes data validation and error handling, and has been fully tested using Postman before being deployed live on Render.
This project provided hands-on experience in:
-Building and structuring scalable backend APIs.
-Managing data persistence with MongoDB and the Mongoose ODM.
-Implementing effective request handling, validation, and error management.
-Utilizing professional tools like Postman for API testing.
-Deploying live backend services for public access.

# Live Access & Testing
You can interact with the deployed API and test all endpoints using the resources below.
| Resource                    |  URL                                                               |
|-----------------------------|--------------------------------------------------------------------|
|  Base URL                   | https://project-api-bootcamp.onrender.com                          |
|-----------------------------|--------------------------------------------------------------------|
| Main Endpoint (GET All)     | https://project-api-bootcamp.onrender.com/api/videos               |
|-----------------------------|--------------------------------------------------------------------|
| Postman Online Workspace    | [🔗 View Postman Online Workspace](https://naazmulla9195-4268808.postman.co/workspace/Naaz-Mulla's-Workspace~c3cb0a93-3d2c-4c84-8f3a-c2ae612dc5d0/request/49725668-7bbdd332-eb66-446d-9792-6d6af4829756?action=share&creator=49725668&ctx=documentation)                            |
| Postman Collection Download | [⬇️ Video Upload API – Naaz Mulla.postman_collection.json](https://github.com/naaz-719/project-api-bootcamp/blob/main/Video%20Upload%20API%20%E2%80%93%20Naaz%20Mulla.postman_collection.json)        |



Main Endpoint (GET All)
https://project-api-bootcamp.onrender.com/api/videos
Postman Online Workspace
View on Postman
Postman Collection Download
Download JSON

🛠 Technology Stack
The following core technologies and tools were used to build and deploy this project:
Category
Technology
Description
Backend
Node.js, Express.js
Core runtime and web framework for the REST API.
Database
MongoDB, Mongoose
NoSQL database and an ODM for object data modeling.
Middleware
CORS
Handling cross-origin requests.
Deployment
Render
Continuous deployment and hosting of the live service.
Testing
Postman
Comprehensive testing and documentation of API endpoints.

🎯 API Endpoints Documentation
The API utilizes the /api/videos route as its primary resource. All requests and responses are JSON-based.
1. Add a New Video (Create)
Endpoint: POST /api/videos
Purpose: Adds a new video record to the database.
Validation: title and videoUrl are required.
Request Body Example:
{
  "title": "Intro to Node.js",
  "description": "Learn basics of Node.js and Express",
  "videoUrl": "[https://www.youtube.com/watch?v=TlB_eWDSMt4](https://www.youtube.com/watch?v=TlB_eWDSMt4)"
}
