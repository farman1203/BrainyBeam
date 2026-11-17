const express = require("express")

const app = express()
app.use(express.json())

const notes = []

app.post("/notes",(req,res)=>{
    notes.push(req.body)

    res.status(201).json({
        message : "notes add successfully"
    })
})

app.get("/notes",(req,res)=>{
    res.status(200).json({
        message : "Notes fetched successfully",
        Notes : notes
    })
})

app.delete("/notes/:index", (req,res)=>{

    const index = req.params.index

    delete notes[index]

    res.status(201).json({
        message : "Notes delete successfully"
    })
})

module.exports = app;