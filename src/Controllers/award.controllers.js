const Award = require("../Models/award.model");

const err = require("../Errors/index");
const { successHandler, errorHandler } = require("../Utils/ResponseHandler");

module.exports.create = async (req, res) => {
    try {
        const { body } = req;
        const award = new Award(body);
        await award.save();
        successHandler(res, award);
    } catch (error) {
        debugger;
        console.log(error);
        return errorHandler(res, error);
    }
};

module.exports.getList = async (req, res) => {
    try {
        const awards = await Award.find({})
        successHandler(res, awards);
    } catch (error) {
        debugger;
        console.log(error);
        return errorHandler(res, error);
    }
};

module.exports.update = async (req, res) => {
    try {
        const award = await Award.findOneAndUpdate({ _id: req.params.id }, req.body)
        successHandler(res, award)
    } catch (error) {
        debugger;
        console.log(error);
        return errorHandler(res, error);
    }
}

module.exports.delete = async (req, res) => {
    try {
        const award = await Award.findOneAndDelete({ _id: req.params.id })
        successHandler(res, award)
    } catch (error) {
        debugger;
        console.log(error);
        return errorHandler(res, error);
    }
}