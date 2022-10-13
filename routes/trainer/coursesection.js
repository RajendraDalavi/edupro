var express = require("express");
var router = express.Router();
var Coursesection = require("../../models/Trainer/Coursesection")

router.put('/', (req, res) => {
    var body = req.body;
    let coursesection = new Coursesection()

    coursesection.courseid = body.courseid;
    coursesection.name = body.name;
    coursesection.srno = body.srno;

    coursesection.save().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (error) => {
        res.end(JSON.stringify({ status: "failed", data: error }));
    });
    // res.send(JSON.stringify({status:"Success"}))
});

router.post('/', async (req, res) => {
    var body = req.body;
    let coursesection = await Coursesection.findById(body.id)

    coursesection.courseid = body.courseid;
    coursesection.name = body.name;
    coursesection.srno = body.srno;

    coursesection.save().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }))
    }, (error) => {
        res.end(JSON.stringify({ status: "failed", data: error }))
    })
});

router.delete('/', async (req, res) => {
    var body = req.body;
    await Coursesection.findByIdAndDelete(body.id);

    res.end(JSON.stringify({ status: "success" }))
});

router.get('/', async (req, res) => {
    let data = await Coursesection.find();
    res.end(JSON.stringify({ status: "success", data: data }))
});

router.get('/:id', async (req, res) => {
    let data = await Coursesection.findById(req.params.id);
    res.end(JSON.stringify({ status: "success", data: data }))
});


// router.patch('/:id', async (req, res) => {
//     let coursesection = await Coursesection.findById(req.params.id);
//     var body = req.body
//     coursesection.srno = body.srno;
//     console.log(body);
//     coursesection.save().then((result) => {
//         res.end(JSON.stringify({ status: "success", data: result }))
//     }, (error) => {
//         res.end(JSON.stringify({ status: "failed", data: error }))
//     })
// });



module.exports = router;