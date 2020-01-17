const Express = require("express");
const app = Express();
const db = require('../../data/helpers/projectModel')


app.use('/:id', async(req,res)=>{
    try{
        const id = req.params.id
        res.status(200).json(await db.get(id))
    }catch{
        res.status(500).json({error:"There was an error while retreiving the project"})
    }
})

app.use("/", (req, res) => res.send("Project Route Home"));
module.exports = app;