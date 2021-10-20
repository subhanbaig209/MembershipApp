const mongoose = require('mongoose');
require("mongoose-currency").loadType(mongoose);

const ActivityRegisterSchema = new mongoose.Schema({
    activityId: {
        //type: String,
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Activity",
        required: true,
    },
    memberId: {
        //type: String,
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Member",
        required: true,
    },
    dependentsId: {
        type: Array,
        required: true,
    },
    paymentIntegrationId: {
        type: String,
        required: true,
    },
    paymentMethod: {
        type: String,
        required: true,
    },
    paymentAmount: {
        type: mongoose.Types.Currency,
        required: true,
        trim: true,
        default: 0,
        min: 0,
    }
}, { timestamps: true });

module.exports = mongoose.model("ActivityRegister", ActivityRegisterSchema);