const jwt = require('jsonwebtoken');
const { HttpError } = require('../helpers');
const { User } = require('../schemas/user');
const { JWT_SECRET } = process.env;

const authenicate = async (req, res, next) => {
    const { authorization = "" } = req.headers;
    const [bearer, token] = authorization.split(" ");
    if (bearer !== "Brearer") {
        next(HttpError(401, "Not authorized"));
    }
    try {
        const { id } = jwt.verify(token, JWT_SECRET);
        const user = await User.findById(id);
        if (!user || !user.token || user.token !== token) {
            next(HttpError(401, "Not authorized"));
        }
        req.user = user;
        next();
    } catch {
        next(HttpError(401, "Not authorized"));
    }

};

module.exports = authenicate;