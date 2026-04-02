const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) return res.status(401).json("Access Denied");

  try {
    const verified = jwt.verify(token, "secret");
    req.user = verified;
    next();
  } catch {
    res.status(400).json("Invalid Token");
  }
};

module.exports = authMiddleware;