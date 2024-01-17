//contactModel.js
const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:"User",
    },
    name: {
        type: String,
        required: [true, "Please add the contact name"],
    },
    email: {
        type: String,
        required: [true, "Please add the email address"],
    },
    phone: {  // Corrected the capitalization of 'Phone' to 'phone'
        type: String,
        required: [true, "Please add the Phone number"],
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model("Contact", contactSchema);
