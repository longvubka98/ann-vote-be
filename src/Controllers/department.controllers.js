const Department = require("../Models/department.model");

const err = require("../Errors/index");
const { successHandler, errorHandler } = require("../Utils/ResponseHandler");

module.exports.create = async (req, res) => {
    try {
        const { body } = req;
        const department = new Department(body);
        await department.save();
        successHandler(res, department);
    } catch (error) {
        debugger;
        console.log(error);
        return errorHandler(res, error);
    }
};

module.exports.getList = async (req, res) => {
    try {
        const departments = await Department.find({})
        successHandler(res, departments);
    } catch (error) {
        debugger;
        console.log(error);
        return errorHandler(res, error);
    }
};

module.exports.update = async (req, res) => {
    try {
        const department = await Department.findOneAndUpdate({ _id: req.params.id }, req.body)
        successHandler(res, department)
    } catch (error) {
        debugger;
        console.log(error);
        return errorHandler(res, error);
    }
}

module.exports.delete = async (req, res) => {
    try {
        const department = await Department.findOneAndDelete({ _id: req.params.id })
        successHandler(res, department)
    } catch (error) {
        debugger;
        console.log(error);
        return errorHandler(res, error);
    }
}