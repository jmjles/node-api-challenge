const Express = require("express");
const app = Express.Router();
const db = require('../../data/helpers/projectModel')


app.get('/:id', async(req,res)=>{
    try{
        const id = req.params.id
        res.status(200).json(await db.get(id))
    }catch{
        res.status(500).json({error:"There was an error while retreiving the project"})
    }
})

app.post("/", async (req, res) => {
  try {
    const post = {
      name: req.body.name,
      description: req.body.description
    };
    console.log(post)
    if(post.name && post.description){
        res.status(200).json(await db.insert(post));
    }else{
        res.status(400).json({error:"Name and Description are required"});
    }
     
  } catch {
    res
      .status(500)
      .json({ error: "There was an error while retreiving the project" });
  }
});

app.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const project = {
        name: req.body.name,
        description: req.body.description,
        completed: req.body.completed
    }
    if(project.name && project.description && project.completed){
        res.status(200).json(await db.update(id,project));
    }else{
        res.status(400).json({ error: "Name, Description, and completed are required" });
    }
  } catch {
    res
      .status(500)
      .json({ error: "There was an error while retreiving the project" });
  }
});

app.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    res.status(203).json(await db.remove(id));
  } catch {
    res
      .status(500)
      .json({ error: "There was an error while retreiving the project" });
  }
});
app.get('/actions/:id',async (req,res)=>{
    try{
const id = req.params.id
    res.status(200).json(await db.getProjectActions(id))
    }catch{
    res
      .status(500)
      .json({ error: "There was an error while retreiving the actions" });
  
    }
    
})
app.get("/", async (req, res) => {
  try {
    res.status(200).json(await db.get());
  } catch {
    res
      .status(500)
      .json({ error: "There was an error while retreiving the project" });
  }
});

module.exports = app;