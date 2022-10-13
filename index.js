var express = require("express");
var app = express();

var bodyparser = require("body-parser");
var mongoose = require("mongoose");

app.use(bodyparser.json({ limit: "50mb" }));
app.use(bodyparser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json());


mongoose.connect("mongodb://localhost:27017/edupro");
var db = mongoose.connection;

db.on("error", (err) => {
    console.log(err);
});


db.on("open", () => {
    console.log("connection success");
})


app.get("/", (req, res) => {
    res.send("Hello mongodb");
});


app.use("/trainer/coursesection", require("./routes/trainer/coursesection"));
// app.use("/trainer/course", require("./routes/trainer/course"));
// app.use("/trainer/coursevideo", require("./routes/trainer/coursevideo"));
// app.use("/user/course/registration", require("./routes/user/user"));
app.use("/user/course", require("./routes/user/user"));
app.use("/trainer/new_coursevideo",require("./routes/trainer/new_coursevideo"))


app.listen(8081, () => {
    console.log("Server is running at http://localhost:8081");
});
