const Candidates = require("../Models/candidates.model");
var fs = require('fs-extra');
var formidable = require('formidable');
var util = require('util');

const err = require("../Errors/index");
const { successHandler, errorHandler } = require("../Utils/ResponseHandler");

module.exports.create = async (req, res) => {
    try {

        let form = new formidable.IncomingForm();
        console.log(req.body, 'req.body');
        form.parse(req, function (err, fields, files) {
            console.log('dfgbfbf');
            util.inspect({ fields: fields, files: files });
        });

        form.on('field', function (name, value) {//This means your html input fields
            console.log('fields', name, value);
            if (name == 'fullName') {
                console.log('here', value);
            }
            if (name == 'fatherName') {
            }
            if (name == 'dt') {
            }
        });
        form.on('file', function (field, file) {//This means on click of file it gets that file.
            console.log(file.name, 'hjgjg');
            var temp = file.path;
            console.log(temp, 'temp', file.name);
            var fileName = file.name;
            var fileName = file.name;
            var location = 'images/';
            var cpLocation = 'empDetails/images/';
            fs.copy(temp, cpLocation + fileName, function (err) {//This means it create a folder and name of the image in your app.
                if (err) {
                    console.log(err);
                }
            });

        });
        form.on('end', function (fields, files) {
        });



        const { body } = req;
        const candidates = new Candidates(body);
        await candidates.save();
        successHandler(res, candidates);
    } catch (error) {
        debugger;
        console.log(error);
        return errorHandler(res, error);
    }
};

module.exports.getList = async (req, res) => {
    try {
        const candidateses = await Candidates.find({})
        successHandler(res, candidateses);
    } catch (error) {
        debugger;
        console.log(error);
        return errorHandler(res, error);
    }
};

module.exports.update = async (req, res) => {
    try {
        const candidates = await Candidates.findOneAndUpdate({ _id: req.params.id }, req.body)
        successHandler(res, candidates)
    } catch (error) {
        debugger;
        console.log(error);
        return errorHandler(res, error);
    }
}

module.exports.delete = async (req, res) => {
    try {
        const candidates = await Candidates.findOneAndDelete({ _id: req.params.id })
        successHandler(res, candidates)
    } catch (error) {
        debugger;
        console.log(error);
        return errorHandler(res, error);
    }
}