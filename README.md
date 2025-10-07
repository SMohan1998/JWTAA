JWT Authentication & Authorization API (Node.js + Express + MongoDB + Postman)

📌 Overview

This is a backend project built with Node.js, Express, MongoDB (Mongoose), and JWT (JSON Web Tokens).
It demonstrates a simple authentication and authorization flow:

✅ User Registration

✅ User Login (returns JWT token)

✅ Protected Route (requires token)

✅ Middleware to verify JWT

✅ Fetch user details from the token

⚙️ Tech Stack

Node.js (runtime)

Express.js (server framework)

MongoDB + Mongoose (database + ODM)

bcryptjs (password hashing)

jsonwebtoken (JWT creation & verification)

dotenv (environment variables)

Postman (to send API request)


📂 Project Structure
jwt-auth-node/
|__ config
|   └── db.js            # Used to connect to mongodb
│── models/
│   └── User.js          # Mongoose user schema
│── middleware/
│   └── auth.js          # JWT verification middleware
│── routes/
│   ├── auth.js          # Register & login routes
│   └── protected.js     # Protected route (requires token)      
│   └── user.js          # User route
│── controllers/
│   └── authController.js# Business logic for auth
    └── UserController.js# User related logic 
│── server.js            # Main entry point
│── .env                 # Environment variables
│── .gitignore           # Ignore node_modules & .env
|__ JWT Auth API.postman_collection.json   
|__ JWT Auth Local.postman_environment.json
│── package.json
│── README.md

📌 API Endpoints
🔹 Register User

POST: https://jwtaa.onrender.com/api/auth/register
Body (JSON):

{
    "username": "Lavanya",
    "email": "Lavanya@fsd.com",
    "password": "Password123"
}


Response: [201 created]
Body (JSON):

{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjhlNGI0Mjk3ODlmZDI2ZDY0NDE1OGQ0In0sImlhdCI6MTc1OTgxODc5MywiZXhwIjoxNzYyNDEwNzkzfQ.jwWqtV16vAvMqxLn2Q-jL2dG2PbXBszMlyq6g4tnqYQ",
    "user": {
        "id": "68e4b429789fd26d644158d4",
        "username": "Lavanya",
        "email": "lavanya@fsd.com"
    }
}

🔹 Login User

POST: https://jwtaa.onrender.com/api/auth/login
Body (JSON):

{
    "email": "Lavanya@fsd.com",
    "password": "Password123"
}


Response: [200 OK]
Body (JSON):

{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OGU0YjQyOTc4OWZkMjZkNjQ0MTU4ZDQiLCJpYXQiOjE3NTk4MTg4NDYsImV4cCI6MTc1OTgyMjQ0Nn0.88HXzgXKXf5NLWBiiy7Gxgob-SatbnW-od0k3LjB5Mw",
    "user": {
        "id": "68e4b429789fd26d644158d4",
        "username": "Lavanya",
        "email": "lavanya@fsd.com"
    }
}

🔹 Protected Route (Get User Info)

GET: https://jwtaa.onrender.com/api/protected

Headers:

Authorization: Bearer {{token}}


Response (200 OK):

{
    "msg": "This is a protected route",
    "user": {
        "userId": "68e4b429789fd26d644158d4",
        "iat": 1759818846,
        "exp": 1759822446
    }
}
