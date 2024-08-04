const ToDoModel = require('../models/ToDoModel');
//defined a new controller function getToDo that will fetch all the todos from the database and send them as a response.
module.exports.getToDo=async (req,res)=>{
  const toDo=await ToDoModel.find();
  res.send(toDo);
}
module.exports.saveToDo=async (req,res)=>{
  const {text}=req.body; //extract the text from the request body, basically destructuring the text from the request body.
  ToDoModel //create a new ToDoModel instance with the text extracted from the request body.
  .create({text})
  .then((data)=>{
    console.log("Added successfully..");
    console.log(data);
    res.send(data)
  })
  
}

module.exports.updateToDo=async (req,res)=>{
  const {_id, text}=req.body;

  ToDoModel
  .findByIdAndUpdate(_id, {text})
  .then(()=> res.send("Updated successfully"))
  .catch((err)=> console.log(err));

}

module.exports.deleteToDo=async (req,res)=>{
  const {_id }=req.body;

  ToDoModel
  .findByIdAndDelete(_id)
  .then(()=> res.send("Deleted successfully"))
  .catch((err)=> console.log(err));

}