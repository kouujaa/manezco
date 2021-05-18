const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const morgan = require("morgan");

const DBURI =
  "mongodb+srv://jjhok:jjhok@mydb.9j7ob.mongodb.net/takehome?retryWrites=true&w=majority";
const PORT = process.env.PORT || 8000;
const User = require("./model/User");

app.use(morgan("tiny"));
app.use(express.json());

app.post("/signUp", async (req, res) => {
  const { email, password } = req.body;
  try {
    const data = await User.findOne({ email });
    if (data) {
      return res.status(400).send("email in use");
    }
    const newPassword = await bcrypt.hash(password, 12);
    const newUser = new User({
      email,
      password: newPassword,
    });
    newUser.save().then((data) => {
      var token = jwt.sign({ id: data._id, role: "User" }, "ManezCo");
      return res.send(token);
    });
  } catch (err) {
    return res.status(200).send("server error");
  }
});

app.post("/login", async (req, res) => {
    console.log(req.body)
  const { email, password } = req.body;
  try {
    const data = await User.findOne({ email });
    if (!data) {
      return res.status(400).send("inalid credentials");
    }
    const isPassword = await bcrypt.compare(password,data.password);
    if(!isPassword){
        return res.status(400).send("inalid credentials");
    }
   var token = jwt.sign({ id: data._id, role: "User" }, "ManezCo");
   return res.send(token);
  } catch (err) {
      console.log(err.message)
    return res.status(400).send("server error");
  }
});

mongoose.connect(
  DBURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to database");
  }
);
app.listen(PORT, () => {
  console.log("server running on port", PORT);
});
