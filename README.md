# Auth-JWT-Node (Example)

## What this project does
Simple Node.js application demonstrating user registration, login and protected routes using:
- Express.js (web framework)
- Mongoose (MongoDB ODM)
- bcryptjs (password hashing)
- jsonwebtoken (JWT token generation & verification)
- express-validator (input validation)

## Prerequisites (what to install)
1. **Node.js & npm**: Verify with:
   - `node -v`
   - `npm -v`
   If missing, install Node.js (that includes npm) from the official website for your OS.

2. **MongoDB**:
   - Option A: Install MongoDB locally and ensure the daemon is running.
   - Option B: Use MongoDB Atlas (cloud). If using Atlas, copy the connection string into `MONGO_URI` in `.env`.

3. (Optional) **Postman** to test API endpoints.

## Setup steps (quick)
1. Copy `.env.example` to `.env` and update values:
   - `MONGO_URI` (e.g. mongodb://localhost:27017/auth-demo or Atlas URI)
   - `JWT_SECRET` must be a long random string.

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run in development (requires nodemon):
   ```bash
   npm run dev
   ```
   Or production:
   ```bash
   npm start
   ```

4. Test with Postman:
   - POST `http://localhost:5000/api/auth/register`
     Body (JSON):
     {
       "username": "mohan",
       "email": "mohan@example.com",
       "password": "secret123"
     }
   - POST `http://localhost:5000/api/auth/login`
     Body (JSON):
     {
       "email":"mohan@example.com",
       "password":"secret123"
     }
     Response contains `{ "token": "<JWT>" }`
   - GET `http://localhost:5000/api/user/me`
     Add header: `Authorization: Bearer <JWT>`

## Files included
- `server.js` - entry point and route mounting
- `config/db.js` - mongoose connection helper
- `models/User.js` - Mongoose schema for users
- `controllers/*` - auth and user controllers
- `middlewares/auth.js` - JWT verification middleware
- `routes/*` - API routes
- `.env.example` - environment variables example

## Troubleshooting
- `MongoNetworkError` = check `MONGO_URI` and that MongoDB is reachable.
- `Token is not valid` = make sure `JWT_SECRET` is identical when signing and verifying.
- `E11000 duplicate key` on registration = email already used.

## Notes
- This is a minimal example. For production add:
  - stronger password policy,
  - refresh tokens or longer token rotation,
  - rate-limiting, logging, helmet, input sanitization,
  - HTTPS and secure cookie usage.
