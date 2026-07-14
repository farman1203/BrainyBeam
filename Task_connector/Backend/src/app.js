const express = require("express")
const multer = require("multer")
const uploadfile = require("./service/storage.service")
const postModel = require("./models/post.model")
const cors = require("cors")

const app=express();
app.use(cors())
app.use(express.json());

const upload = multer({storage: multer.memoryStorage()} )


app.post("/product", upload.single("proimage"),  async(req,res) =>{
    console.log(req.body);
    console.log(req.file);
    const result=  await uploadfile(req.file.buffer)

    const post = await postModel.create({
        proimage:result.url,
        proname: req.body.proname,
        prodescription:req.body.prodescription,
        proprice:req.body.proprice
    })
    return res.status(201).json({
        message:"Product add successfulyy",
        post
    })
    
})


app.get("/posts",async (req,res)=>{

    const posts = await postModel.find()

    return res.status(200).json({
        message:"Product Fetched Successfully",
        posts
    })
})

module.exports = app;   