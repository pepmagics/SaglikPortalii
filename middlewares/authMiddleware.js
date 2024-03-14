const collection = require("../src/config");
const jwt = require("jsonwebtoken");

const authenticateToken = async (req, res, next) => {
    
    const authLocalStorage = req.headers['authorization'];
    const token = authLocalStorage && authLocalStorage.split(' ')[1];
    if(token == null) {
        return res.status(401).json({
        succeeded: false,
        error: 'No token available',
    });
    }

    req.user = await collection.findById((jwt.verify(token, "secret"))._id);
    next();
}

module.exports = authenticateToken