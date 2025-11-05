## RESTful Video Management API

## Project Overview
This project is the culmination of the APIs in Action Bootcamp, demonstrating the end-to-end development of a robust backend REST API.
Built on the Node.js, Express, and MongoDB (Mongoose) stack, this application provides full CRUD (Create, Read, Update, Delete) functionality for managing video records. The API includes data validation and error handling, and has been fully tested using Postman before being deployed live on Render.
This project provided hands-on experience in:
-Building and structuring scalable backend APIs.
-Managing data persistence with MongoDB and the Mongoose ODM.
-Implementing effective request handling, validation, and error management.
-Utilizing professional tools like Postman for API testing.
-Deploying live backend services for public access.

## Live Access & Testing

You can interact with the deployed API and test all endpoints using the resources below.

| Resource                    |  URL                                                               |
|-----------------------------|--------------------------------------------------------------------|
|  Base URL                   | https://project-api-bootcamp.onrender.com                          |
| Main Endpoint (GET All)     | https://project-api-bootcamp.onrender.com/api/videos               |
| Postman Online Workspace    | [🔗 View Postman Online Workspace](https://naazmulla9195-4268808.postman.co/workspace/Naaz-Mulla's-Workspace~c3cb0a93-3d2c-4c84-8f3a-c2ae612dc5d0/request/49725668-7bbdd332-eb66-446d-9792-6d6af4829756?action=share&creator=49725668&ctx=documentation)                            |
| Postman Collection Download | [⬇️ Video Upload API – Naaz Mulla.postman_collection.json](https://github.com/naaz-719/project-api-bootcamp/blob/main/Video%20Upload%20API%20%E2%80%93%20Naaz%20Mulla.postman_collection.json)        |


## Technology Stack

The following core technologies and tools were used to build and deploy this project:

| Category                 | Technology                | Description                                                                             |
|--------------------------|---------------------------|-----------------------------------------------------------------------------------------|
| Backend                  | Node.js, Express.js       | Core runtime and web framework for the REST API.                                        |
| Database                 | MongoDB, Mongoose         | NoSQL database and an ODM for object data modeling.                                     |
| Middleware               | CORS                      | Handling cross-origin requests.                                                         |
| Deployment               | Render                    | Continuous deployment and hosting of the live service.                                  |
| Testing                  | Postman                   | Comprehensive testing and documentation of API endpoints.                               |


## API Endpoints Documentation

The API utilizes the /api/videos route as its primary resource. All requests and responses are JSON-based.

**1. Add a New Video (Create)**

Endpoint: POST /api/videos
Purpose: Adds a new video record to the database.
Validation: title and videoUrl are required.

*Request Body Example:*

{
  "title": "Intro to Node.js",
  "description": "Learn basics of Node.js and Express",
  "videoUrl": "[https://www.youtube.com/watch?v=TlB_eWDSMt4](https://www.youtube.com/watch?v=TlB_eWDSMt4)"
  "[https://www.youtube.com/watch?v=TlB_eWDSMt4](https://www.youtube.com/watch?v=TlB_eWDSMt4)"
}


*Response (201 Created) Example:*

{
  "success": true,
  "message": "Video added successfully!",
  "data": {
    "_id": "6508f912c8e4c4a1e17b49b2",
    "title": "Intro to Node.js",
    "description": "Learn basics of Node.js and Express",
    "videoUrl": "[https://www.youtube.com/watch?v=TlB_eWDSMt4](https://www.youtube.com/watch?v=TlB_eWDSMt4)",
    "createdAt": "2025-11-05T15:01:52.456Z"
  }
}


**2. Get All Videos (Read)**

Endpoint: GET /api/videos
Purpose: Retrieves a list of all video records.

**3. Get Video by ID (Read)**

Endpoint: GET /api/videos/:id
Purpose: Retrieves a single video record by its unique MongoDB ID.

**4. Update Video (Update)**

Endpoint: PUT /api/videos/:id
Purpose: Modifies an existing video record.

*Request Body Example:*

{
  "title": "Node.js Basics (Updated)",
  "description": "Updated description for testing"
}


**5. Delete Video (Delete)**

Endpoint: DELETE /api/videos/:id
Purpose: Deletes a single video record by its unique MongoDB ID.

## Local Setup Instructions

Follow these steps to get a copy of the project running on your local machine.

**Prerequisites**

Node.js (LTS recommended)
MongoDB Atlas Account (to configure a cluster)

**1. Clone the Repository**

git clone [https://github.com/naaz-719/project-api-bootcamp.git](https://github.com/naaz-719/project-api-bootcamp.git)
cd project-api-bootcamp


**2. Configure MongoDB URI**

Add your MongoDB Atlas connection string. This project connects to a database named podcast.

*MONGO_URI="mongodb+srv://<your_user>:<your_password>@cluster0.mongodb.net/podcast?retryWrites=true&w=majority"*


**3. Install Dependencies**

npm install


**4. Start the Server**

Run the server using Node:
node index.js


Alternatively, use Nodemon for development:
nodemon index.js


The API will be available locally at: http://localhost:3000
}
