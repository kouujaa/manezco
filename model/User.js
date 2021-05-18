const mongooose = require("mongoose");

const userScheme = new mongooose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});


const User = mongooose.model("user",userScheme)

module.exports = User