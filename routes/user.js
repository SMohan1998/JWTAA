// routes/user.js
const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const userController = require('../controllers/userController');

// GET /api/user/me - protected
router.get('/me', auth, userController.getMe);

module.exports = router;
