# Node.js template

This is a Node.js project with an HTTP server.

Add your [configuration](https://codesandbox.io/docs/projects/learn/setting-up/tasks) to optimize it for [CodeSandbox](https://codesandbox.io).

## How does this work?

We run `yarn start` to start an HTTP server that runs on http://localhost:8080. You can open new or existing devtools with the + button next to the devtool tabs.

## Resources

- [CodeSandbox — Docs](https://codesandbox.io/docs)
- [CodeSandbox — Discord](https://discord.gg/Ggarp3pX5H)


# Project Overview

This project is part of the APIs in Action Bootcamp.
It is a backend REST API built using Node.js, Express, and MongoDB (Mongoose) that allows users to add, retrieve, update, and delete video records.
The API has been fully tested using Postman and deployed on Render for live access


# Live Deployment

**Base URL:**  
https://project-api-bootcamp.onrender.com  

**Main Endpoint (Fetch All Videos):**  
https://project-api-bootcamp.onrender.com/api/videos
 
You can open this link directly to view the live API response (GET request).

# Postman Collection

You can test all endpoints yourself using this Postman file:

Download JSON:
https://github.com/naaz-719/project-api-bootcamp/blob/main/Video%20Upload%20API%20%E2%80%93%20Naaz%20Mulla.postman_collection.json

Or open the online workspace:
View on Postman:  https://naazmulla9195-4268808.postman.co/workspace/Naaz-Mulla's-Workspace~c3cb0a93-3d2c-4c84-8f3a-c2ae612dc5d0/request/49725668-7bbdd332-eb66-446d-9792-6d6af4829756?action=share&creator=49725668&ctx=documentation

# Technologies Used

- Node.js

- Express.js

- MongoDB & Mongoose

- CORS Middleware

- Render (deployment)

- Postman (API testing)

# Setup Instructions
**1. Clone the Repository**
git clone https://github.com/yourusername/video-upload-api.git
cd video-upload-api

**2. Install Dependencies**
npm install

**3. Start the Server**
node index.js


or

nodemon index.js


The API will run locally at:
http://localhost:3000

# MongoDB Configuration

This project connects to a MongoDB Atlas database named podcast:

const MONGO_URI = "mongodb+srv://<user>:<password>@cluster0.mongodb.net/podcast";

# API Endpoints
**Add a New Video**

*POST /api/videos*

{
  "title": "Intro to Node.js",
  "description": "Learn basics of Node.js and Express",
  "videoUrl": "https://www.youtube.com/watch?v=TlB_eWDSMt4"
}


*Response (201):*

{
  "success": true,
  "message": "Video added successfully!",
  "data": {
    "_id": "6508f912c8e4c4a1e17b49b2",
    "title": "Intro to Node.js",
    "description": "Learn basics of Node.js and Express",
    "videoUrl": "https://www.youtube.com/watch?v=TlB_eWDSMt4",
    "createdAt": "2025-11-05T15:01:52.456Z"
  }
}

**Get All Videos**

*GET /api/videos*
Returns all uploaded video records.

*Get Video by ID*

GET /api/videos/:id

**Update Video**

*PUT /api/videos/:id*

{
  "title": "Node.js Basics (Updated)",
  "description": "Updated description for testing"
}

**Delete Video**

*DELETE /api/videos/:id*

**Validation Rules**

title and videoUrl are required fields.

Missing any required field returns a 400 Bad Request.

# Conclusion

This project successfully demonstrates the complete implementation of a RESTful Video Management API using Node.js, Express, and MongoDB.
From connecting to a cloud database to deploying a fully functional backend on Render, every step has been accomplished — including validation, error handling, and CRUD operations.

By completing this project, I gained practical experience in:

Building and structuring backend APIs

Managing data with MongoDB and Mongoose

Handling HTTP requests and responses effectively

Testing APIs through Postman

Deploying live applications for public access

The project fulfills all the requirements mentioned in the APIs in Action Bootcamp guidelines, and it serves as a strong foundation for more advanced full-stack web development projects in the future.
