var express = require("express");
var router = express.Router();
var User = require("../../models/User/User")

router.put('/registration', (req, res) => {
    var body = req.body;
    let user = new User()

    user.trainerid = body.trainerid;
    user.name = body.name;
    user.email = body.email;
    user.password = body.password;
    user.timestamp = body.timestamp;

    user.save().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }))
    }, (error) => {
        res.end(JSON.stringify({ status: "failed", data: error }))
    });
    // res.send(JSON.stringify({status:"Success"}))
});

router.post("/markpaid", (req, res) => {
    let body = req.body;
    let user = new User();
    user.trainerid = body.trainerid;
    user.name = body.name;
    user.email = body.email;
    user.password = body.password;
    user.timestamp = body.timestamp;
    user.save().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }))
    }, (error) => {
        res.end(JSON.stringify({ status: "failed", data: error }))
    });
});


module.exports = router;