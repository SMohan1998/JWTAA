EXPLANATION (line-by-line highlights)

1) server.js
- Loads environment variables with dotenv.
- Calls connectDB() to connect to MongoDB.
- Uses express.json() to parse incoming JSON bodies.
- Mounts routes under /api/auth and /api/user.

2) config/db.js
- Uses mongoose.connect(MONGO_URI) to connect.
- On failure, logs error and exits process.

3) models/User.js
- Defines a simple User schema with username, email, and password.
- Email is unique so registration of same email will fail.

4) controllers/authController.js
- register:
  * validates incoming body using express-validator
  * checks if user already exists by email
  * salts and hashes password using bcryptjs
  * creates and saves user
  * returns 201 with a success message
- login:
  * validates request
  * finds user by email
  * compares password with hashed password
  * on success signs a JWT containing { userId }
  * returns token and basic user info

5) middlewares/auth.js
- Extracts Authorization header, expects "Bearer <token>"
- Verifies token with jwt.verify() against JWT_SECRET
- Attaches decoded payload to req.user for downstream handlers

6) routes
- auth routes: /register and /login
- user routes: /me protected endpoint

Security & Production notes:
- Use a long random `JWT_SECRET` saved only in env variables.
- Do NOT commit `.env` to git.
- Consider session invalidation & token blacklisting for logout flows.
- Consider stronger hashing/work factor if needed.
