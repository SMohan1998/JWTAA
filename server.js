// server.js - entry point
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const cors = require('cors');

dotenv.config(); // loads .env
connectDB(); // connect to MongoDB

const app = express();
app.use(express.json()); // parse JSON bodies
app.use(cors());

app.get('/', (req, res) => {
  res.send('API is running');
});
// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/user', require('./routes/user'));
app.use('/api/protected', require('./routes/protected'));

//un-matched routes catch
app.use((req, res) => {
  res.status(404).json({ msg: 'Route not found' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
