const Express = require("express");
const app = Express.Router();
const db = require("../../data/helpers/actionModel");

app.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    res.status(200).json(await db.get(id));
  } catch {
    res
      .status(500)
      .json({ error: "There was an error while retreiving the action" });
  }
});

app.post("/", async (req, res) => {
  try {
    const post = {
      project_id: req.body.projectID,
      description: req.body.description,
      notes: req.body.notes
    };

    if (post.notes && post.description && post.project_id) {
      res.status(200).json(await db.insert(post));
    } else {
      res.status(400).json({ error: "Notes, Description, and Project Id are required" });
    }

  } catch {
    res
      .status(500)
      .json({ error: "There was an error while adding the action" });
  }
});

app.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const action = {
      notes: req.body.notes,
      description: req.body.description,
      completed: req.body.completed
    };
    if (action.notes && action.description && action.completed) {
      res.status(200).json(await db.update(id, action));
    } else {
      res
        .status(400)
        .json({ error: "Name, Description, and completed are required" });
    }
  } catch {
    res
      .status(500)
      .json({ error: "There was an error while editing the action" });
  }
});

app.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    res.status(203).json(await db.remove(id));
  } catch {
    res
      .status(500)
      .json({ error: "There was an error while deleting the action" });
  }
});
app.use("/", (req, res) => res.send("Project Route Home"));

module.exports = app;
