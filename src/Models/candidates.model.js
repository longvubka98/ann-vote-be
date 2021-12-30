const mongoose = require("mongoose");
const { RoleSystem } = require("../Enums");
const err = require("../Errors/index");

const candidatesSchema = mongoose.Schema(
    {
        banner: {
            type: String,
            validate: (value) => {
                if (!/([/|.|\w|\s|-])*\.(?:jpg|gif|png)/.test(value))
                    throw new Error(err.INVALID_IMAGE.messageCode);
            },
        },
        name: {
            type: String,
        },
        image1: {
            type: String,
            validate: (value) => {
                if (!/([/|.|\w|\s|-])*\.(?:jpg|gif|png)/.test(value))
                    throw new Error(err.INVALID_IMAGE.messageCode);
            },
        },
        image2: {
            type: String,
            validate: (value) => {
                if (!/([/|.|\w|\s|-])*\.(?:jpg|gif|png)/.test(value))
                    throw new Error(err.INVALID_IMAGE.messageCode);
            },
        },
        title: {
            type: String
        },
        description: {
            type: String
        },
        award: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "award"
        }
    },
    { timestamps: true }
);

const Candidates = mongoose.model("Candidates", candidatesSchema);
module.exports = Candidates;