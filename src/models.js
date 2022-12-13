const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");

const todoSchema = new mongoose.Schema({     //hume is format mein chaie jab is format mein dalenge postman to data compass mein show hoga
    taskName : String,
    description : String,
    isCompleted : Boolean
})

const todo = mongoose.model("todo",todoSchema);
module.exports = {todo}