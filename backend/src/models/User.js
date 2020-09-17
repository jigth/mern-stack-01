const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        maxlength: 50,
        trim: true  // Clean username from any extra spaces automatically
    }
}, { timestamps: true });

module.exports = model("User", userSchema);