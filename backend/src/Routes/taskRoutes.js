import express from "express";
import task from "../models/task.model.js";
import mongoose from "mongoose";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const alltask = await task.find({});
    res.status(201).json(alltask);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

router.post("/", async (req, res) => {
  const newTask = await task.create({
    text: req.body.text,
  });
  res.json(newTask);
});

router.delete("/:id", async(req, res) => {
  const deletedtask=await task.findByIdAndDelete(
    req.params.id
  );
  res.json(deletedtask);
});

router.patch("/:id", async(req,res)=>{

 const updatedTask = await task.findByIdAndUpdate(
   req.params.id,
   req.body,
   {
     returnDocument:"after"
   }
 );

 res.json(updatedTask);

});

export default router;
