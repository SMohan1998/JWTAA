// middlewares/auth.js - verifies bearer token and attaches user info to req
const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  const authHeader = req.header('authorization') || req.headers['authorization'];
  //const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;
  //if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });
  if (!authHeader) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  const parts = authHeader.split(' ');
  if (parts.length !== 2 || parts[0] !== 'Bearer') {
    return res.status(401).json({ msg: 'Token format is invalid' });
  }
  const token = parts[1].trim();
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // decoded contains whatever we signed (here { userId: ... })
    req.user = decoded.user || decoded; // attach user info to req
    next();
  } catch (err) {
    //console.error('Token verification failed:', err.message);
    return res.status(401).json({ msg: 'Token is not valid', error: err.message });
  }
};
