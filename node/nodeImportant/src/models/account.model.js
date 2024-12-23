const mongoose = require("mongoose");
const { v4 } = require("uuid");

const accountSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: v4,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    mobileNo: {
      type: Number,
    },
    accountNo: {
      type: String,
      default: v4,
    },
    email: {
      type: String,
    },
    picture: {
      type: String,
    },
  },
  { timestamps: true }
);

const accountModel = mongoose.model("account", accountSchema);

module.exports = accountModel;
