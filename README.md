JWT Authentication & Authorization API (Node.js + Express + MongoDB)
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
│── package.json
│── README.md

📌 API Endpoints
🔹 Register User

POST [/api/auth/register](http://localhost:5000/api/auth/register)
Body (JSON):

{
    "username": "Nikhil",
    "email": "Nikhil@fsd.com",
    "password": "Password123"
}


Response: [201 created]
Body (JSON):

{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjhlMzM0N2IxYzg0ODc5MDM2MWYyMDBhIn0sImlhdCI6MTc1OTcyMDU3MSwiZXhwIjoxNzYyMzEyNTcxfQ.fX6yOvaL686ATvvbKFQFbQA7W0GsWskgNATRFOkKbDc",
    "user": {
        "id": "68e3347b1c848790361f200a",
        "username": "Nikhil",
        "email": "nikhil@fsd.com"
    }
}

🔹 Login User

POST [/api/auth/login](http://localhost:5000/api/auth/login)
Body (JSON):

{
    "email": "Nikhil@fsd.com",
    "password": "Password123"
}


Response: [200 OK]
Body (JSON):

{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OGUzMzQ3YjFjODQ4NzkwMzYxZjIwMGEiLCJpYXQiOjE3NTk3MjA4MDIsImV4cCI6MTc1OTcyNDQwMn0.wwKPBNzQL0DKGFaK5_UKibrm9sBx6vNU5VNRI1rBRD0",
    "user": {
        "id": "68e3347b1c848790361f200a",
        "username": "Nikhil",
        "email": "nikhil@fsd.com"
    }
}

🔹 Protected Route (Get User Info)

GET http://localhost:5000/api/protected

Headers:

Authorization: Bearer {{token}}


Response (200 OK):

{
    "msg": "This is a protected route",
    "user": {
        "userId": "68e3347b1c848790361f200a",
        "iat": 1759720802,
        "exp": 1759724402
    }
}
