const userModel = require("../modles/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const blackListTokenModel = require("../modles/blacklistToken.model");
const captainModel = require("../modles/captain.model");

module.exports.authUser = async (req, res, next) => {
  try {
    // Extract token from cookies or Authorization header
    const token = req.cookies?.token || req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Unauthorized: Token missing." });
    }

    // Check if token is blacklisted
    const isBlacklisted = await blackListTokenModel.findOne({ token });
    if (isBlacklisted) {
      return res.status(401).json({ message: "Unauthorized: Token is blacklisted." });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Fetch the user
    const user = await userModel.findById(decoded._id || decoded.id); // ⬅️ FIX: ensure it works with both keys

    if (!user) {
      return res.status(401).json({ message: "Unauthorized: User not found." });
    }

    req.user = user; // Attach user to request
    next(); // Proceed to controller
  } catch (err) {
    console.error("JWT Auth Error:", err.message);
    return res.status(401).json({ message: "Unauthorized: Invalid or expired token." });
  }
};

module.exports.authCaptain = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized." });
  }

  const isBlacklisted = await blackListTokenModel.findOne({ token: token });

  if(isBlacklisted){
    return res.satus(401).json({ message: "Unauthorized." });
  };

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const captain = await captainModel.findById(decoded.id);

    req.captain = captain;
    return next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized." });
  }
}
