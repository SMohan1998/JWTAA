// controllers/userController.js
const User = require('../models/User');

exports.getMe = async (req, res) => {
  try {
    // req.user.userId is set by middleware after verifying token
    const user = await User.findById(req.user.userId).select('-password');
    if (!user) return res.status(404).json({ msg: 'User not found' });
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
