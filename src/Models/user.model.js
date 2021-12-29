const mongoose = require("mongoose");
const validator = require("validator");
const { RoleSystem } = require("../Enums");
const err = require("../Errors/index");
const jwt = require("jsonwebtoken");
const authConfig = require("../../config/auth.config");

const userSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            lowercase: true,
            validate: (value) => {
                if (!validator.isEmail(value))
                    throw new Error(err.INVALID_EMAIL.messageCode);
            },
        },
        avatar: {
            type: String
        },
        name: {
            type: String,
        },
        role: {
            type: String,
            enum: Object.keys(RoleSystem),
            default: RoleSystem.USER,
        },
        department: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "department"
        }
    },
    { timestamps: true }
);

userSchema.methods.generateAuthToken = async function () {
    const user = this;
    const token = jwt.sign({ user: user.toJSON() }, authConfig.secret, {
        expiresIn: authConfig.tokenLife,
    });
    const refreshToken = jwt.sign(
        { user: user.toJSON() },
        authConfig.refreshTokenSecret,
        {
            expiresIn: authConfig.refreshTokenLife,
        }
    );
    return { token, refreshToken, user };
};
const verifyJwt = async (token, secret) => {
    try {
        return await jwt.verify(token, secret);
    } catch (error) {
        if (error.message === "jwt expired")
            throw new Error(err.TOKEN_EXPIRED.messageCode)
        throw new Error(error)
    }
}

userSchema.statics.verifyJwtToken = async (token) => await verifyJwt(token, authConfig.secret)
userSchema.statics.verifyJwtRefreshToken = async (token) => await verifyJwt(token, authConfig.refreshTokenSecret)

const User = mongoose.model("User", userSchema);
module.exports = User;