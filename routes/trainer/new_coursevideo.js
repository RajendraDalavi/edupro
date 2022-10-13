var express = require("express");
const Coursevideo = require("../../models/Trainer/New_Coursevideo");
var router = express.Router();
// Coursevideo = require("../../models/Trainer/New_Coursevideo");

router.put("/",(req,res)=>{
    try{
        
    var body = req.body;
    var coursevideo = new Coursevideo();
    coursevideo.courseid = body.courseid;
    coursevideo.sectionid = body.sectionid;
    coursevideo.name = body.name;
    coursevideo.description = body.description;
    coursevideo.srno = body.srno;
    coursevideo.vfrom = body.vfrom;
    coursevideo.videocode =body.videocode

    coursevideo.save().then((result)=>{
        res.end(JSON.stringify({status:"success",data:result}));
    },(error)=>{
        res.end(JSON.stringify({status:"failed",data:error}));
    })

    }catch(ex){
        res.end(JSON.stringify({status:"failed",data:ex}));
    }
    
});


router.post("/", async(req,res)=>{
    try{
    var body = req.body;
    let coursevideo = await Coursevideo.findById(body.id);

    coursevideo.courseid = body.courseid;
    coursevideo.sectionid = body.sectionid;
    coursevideo.name = body.name;
    coursevideo.description = body.description;
    coursevideo.srno = body.srno;
    coursevideo.vfrom = body.vfrom;
    coursevideo.videocode =body.videocode

    coursevideo.save().then((result)=>{
        res.end(JSON.stringify({status:"success",data:result}));
    },(error)=>{
        res.end(JSON.stringify({status:"failed",data:error}));
    })
    }catch(ex){
        res.end(JSON.stringify({status:"failed",data:ex}));
    }
    
});


router.delete("/", async (req, res) => {
    var body = req.body;
    await Coursevideo.findByIdAndDelete(body.id);
    res.end(JSON.stringify({ status: "success" }));
});

router.get("/", async (req, res) => {
    let data = await Coursevideo.find();
    res.end(JSON.stringify({ status: "success", data: data }));
});


router.get("/:id", async (req, res) => {
    let data = await Coursevideo.findById(req.params.id);
    res.end(JSON.stringify({ status: "success", data: data }));
});


module.exports=router;