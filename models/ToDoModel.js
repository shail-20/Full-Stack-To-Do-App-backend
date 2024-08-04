const mongoose=require('mongoose');
const todoSchema=new mongoose.Schema({
  text: {
    type: String,
    required: true
  }
})
module.exports=mongoose.model('ToDo', todoSchema);
//schema is a blueprint for the data that we are going to store in the database.
//here, we are creating a schema for the ToDo model with a single field text of type String and required as true.