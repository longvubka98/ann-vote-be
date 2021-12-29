const mongoose = require("mongoose");

const awardSchema = mongoose.Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    }
}, { timestamps: true })

const Award = mongoose.model("Award", awardSchema);
module.exports = Award;