const authConfig = require("../../config/auth.config");
const User = require("../Models/user.model");
const err = require("../Errors/index");
const { getUserProfile } = require("../Utils/GoogleAPI");
const { successHandler, errorHandler } = require("../Utils/ResponseHandler")

exports.loginGoogle = async (req, res, next) => {
    try {
        console.log(`req______________`, req.body)
        let { accessToken } = req.body
        const userInfo = await getUserProfile(accessToken)
        console.log(`userInfo`, userInfo)
        const userDb = await User.findOne({ email: userInfo.email })
        if (!userDb) {
            const user = new User({
                email: userInfo.email,
                avatar: userInfo.picture,
                name: `${userInfo.family_name} ${userInfo.given_name}`
            })
            await user.save();
            const { token, refreshToken } = await user.generateAuthToken();
            return successHandler(res, { token, refreshToken, user }, 201)
        } else {
            const { token, refreshToken } = await userDb.generateAuthToken();
            return successHandler(res, { token, refreshToken, user }, 201)
        }
    } catch (error) {
        console.log(`error`, error)
        if (error.code === 11000)
            return errorHandler(res, err.EMAIL_DUPLICATED, error)
        return errorHandler(res, error)
    }
}

exports.updateDepartment = async (req, res) => {
    try {
        const user = await User.findOneAndUpdate({ _id: req.params.id }, req.body)
        successHandler(res, user)
    } catch (error) {
        debugger;
        console.log(error);
        return errorHandler(res, error);
    }
}