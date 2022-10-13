var express = require("express");
var router = express.Router();
var Course = require("../../models/Trainer/Course");

router.put("/", (req, res) => {
    try{
        var body = req.body;
        var course = new Course();
        course.trainerid = body.trainerid;
        course.title = body.title;
        course.description = body.description;
        course.imagepath = body.imagepath;
        course.mrp = body.mrp;
        course.price = body.price;
        course.status = body.status;
        course.timestamp = body.timestamp;
        // console.log(body);
    
        course.save().then((result) => {
            res.end(JSON.stringify({ status: "success", data: result }));
        }, (error) => {
            res.end(JSON.stringify({ status: "failed", data: error }));
        });

    }catch(ex){
        res.end(JSON.stringify({status:"failed",data:ex}));
    }
   
});

router.post("/", async (req, res) => {
    var body = req.body;
    let course = await Course.findById(body.id);

    course.trainerid = body.trainerid;
    course.title = body.title;
    course.description = body.description;
    course.imagepath = body.imagepath;
    course.mrp = body.mrp;
    course.price = body.price;
    course.status = body.status;
    course.timestamp = body.timestamp;

    course.save().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (error) => {
        res.end(JSON.stringify({ status: "failed", data: error }));
    })
});


router.delete("/", async (req, res) => {
    var body = req.body;
    await Course.findByIdAndDelete(body.id);
    res.end(JSON.stringify({ status: "deleted" }));
});


router.get("/", async (req, res) => {
    let data = await Course.find();
    res.end(JSON.stringify({ status: "success", data: data }));
});

router.get("/:id", async (req, res) => {
    let data = await Course.findById(req.params.id);
    res.end(JSON.stringify({ status: "success", data: data }));
});




module.exports = router;