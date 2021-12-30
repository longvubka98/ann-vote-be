const { errorHandler } = require("../Utils/ResponseHandler")
const err = require("../Errors/index");

const isAdmin = async (req, res, next) => {
    try {
        if (req.isAdmin() === true)
            next()
        else
            return errorHandler(res, err.ONLY_ADMIN)
    } catch (error) {
        return errorHandler(res, error);
    }
}

module.exports = isAdmin;