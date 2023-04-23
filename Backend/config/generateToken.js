const jwt = require("jsonwebtoken");
require("dotenv").config();
const jwtsecret = process.env.JWT_SECRET;

const generateToken = (id) => {
    return jwt.sign({ id }, jwtsecret, {
        expiresIn:"30d",
    })
}

module.exports = generateToken;