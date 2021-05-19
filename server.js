const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");
app.use(cors());

const DBURI =
  "mongodb+srv://jjhok:jjhok@mydb.9j7ob.mongodb.net/takehome?retryWrites=true&w=majority";
const PORT = process.env.PORT || 3001;
const User = require("./model/User");


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
      return res
        .header("x-authentication-token", token)
        .cookie("token", token)
        .send("signup-succesful");
      
    });
  } catch (err) {
    console.log("from user signup", err.message);
    return res.status(500).redirect("/login");
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const data = await User.findOne({ email });
    if (!data) {
      return res.status(400).send("inalid credentials");
    }
    const isPassword = await bcrypt.compare(password, data.password);
    if (!isPassword) {
      return res.status(400).send("inalid credentials");
    }
    var token = jwt.sign({ id: data._id, role: "User" }, "ManezCo");
    return res
      .header("x-authentication-token", token)
      .cookie("token", token)
      .send("login-succesful");
  } catch (err) {
    console.log("from user signup", err.message);
    return res.status(500).redirect("/login");
  }
});

mongoose.connect(
  DBURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to database");
  }
);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
app.listen(PORT, () => {
  console.log("server running on port", PORT);
});
