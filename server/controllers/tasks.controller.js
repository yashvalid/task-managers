const { validationResult } = require('express-validator');
const Tasks = require('../models/tasks.model');

module.exports.addTask = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(400).json({ errors: errors.array() });

    try {
        const { title, description, priority } = req.body;
        const user = req.user;
        const newTask = await Tasks.create({
            title,
            description,
            priority,
            user
        });
        return res.status(200).json({ newTask });
    } catch (err) {
        return res.status(500).json({ error: "Internal server error" });
    }
}

module.exports.getAllTasks = async (req, res) => {
    try {
        const user = req.user;
        const allTasks = await Tasks.find({ user });
        return res.status(200).json({ tasks: allTasks });
    } catch (err) {
        return res.status(500).json({ error: "Internal server error" });
    }
}

module.exports.getTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Tasks.findById({ _id: id });
        if (!task)
            return res.status(400).json({ error: "No task found" });
        return res.status(200).json({ task });
    } catch (err) {
        return res.status(500).json({ error: "Internal server error" });
    }
}

module.exports.deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Tasks.deleteOne({ _id: id });
        if (!task)
            return res.status(400).json({ error: "No task found" });
        return res.status(200).json({ message: "Task deleted" });
    } catch (err) {
        return res.status(500).json({ error: "Internal server error" });
    }
}

module.exports.updateTask = async (req, res) => {
    try {
        const { ...updateTask } = req.body;
        const { id } = req.params;
        Object.keys(updateTask).forEach(key => {
            if (updateTask[key] === "")
                delete updateTask[key];
        });
        const updatedTask = await Tasks.findByIdAndUpdate(
            { _id: id },
            { $set: updateTask },
            { new: true }
        );
        if (updatedTask)
            return res.status(200).json({ message: "Task updated successfully" });
        return res.status(400).json({ error: "Failed to update task" });
    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: "Internal server error" });
    }
}