const express = require("express");
const path = require("path");
const mdb = require("mongoose");
const dotenv = require("dotenv");
const Signup = require("./models/signupSchema");
const app = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded());

mdb
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("conntected");
  })
  .catch((e) => {
    console.log("not conntected");
  });
app.get("/static", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/", (req, res) => {
  res.send("Welcome to backend my friend...\n this is backend process area");
});
app.post("/signup", (req, res) => {
  var { firstname, lastname, email, password } = req.body;
  console.log(req.body);
  try {
    const newCustomer = new Signup({
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
    });
    newCustomer.save();
    console.log(newCustomer);
    res.status(201).send("signup is successfull");
  } catch (error) {
    res.status(401).send("signup unsuccessful", error);
  }
});

app.get("/getssignupdet", async (req, res) => {
  var signUpdet = await Signup.find();
  res.status(200).json(signUpdet);
});
// app.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await Signup.findOne({ email });
//     if (!user) {
//       return res.status(404).send("User not found!");
//     }

//     if (user.password !== password) {
//       return res.status(401).send("Invalid credentials!");
//     }
//     res.status(200).send("Login successful!");
//   } catch (error) {
//     console.error("Login error:", error);
//     res.status(500).send("Error during login");
//   }
// });

app.post('/login',async (req,res)=>{
  var {email,password}= req.body;
  console.log(req.body);
  try{ 
    var user=await Signup.findOne({email});
  if (!user) {
    return res.status(404).json({ message: "User not found" });
}
const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(401).json({ message: "Invalid password" });
    }
    console.log("insiide try");
    res.status(201).json({ message: "Login successful", user });
    } catch (error) {
    console.error(error);
    console.log("insiide catch");
    res.status(500).json({ message: "Internal server error" });
}});


app.post("/update", async (req, res) => {
  const update = await Signup.findOneAndUpdate(
    { firstname: "boopathi" },
    { $set: { firstname: "boopathi_27" } }
  );
  res.json("record updated");
  update.save();
});

app.post("/delete", async (req, res) => {
  try {
    const { firstname } = req.body;
    if (!firstname) {
      return res.status(400).json({ message: "Firstname is required" });
    }

    const del = await Signup.deleteOne({ firstname });

    if (del.deletedCount > 0) {
      res.status(200).json({ message: "Record deleted successfully" });
    } else {
      res.status(404).json({ message: "No record found with the given firstname" });
    }
  } catch (error) {
    console.error("Error deleting record:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});


app.listen(3001, () => {
  console.log("My Server Started");
});
