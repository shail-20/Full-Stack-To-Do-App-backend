const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/ToDoRoute');
require('dotenv').config(); //to load environment variables from a .env file into process.env. 
const app = express(); //create an express app by invoking the express() function
const PORT = process.env.PORT || 5000;
//process.env.PORT is used to get the port number from the environment variable PORT. If it is not available, it will use the default port 5000.

app.use(express.json());
app.use(cors());

//connect to MongoDB
mongoose
.connect(process.env.MONGODB_URL)
.then(()=> console.log('MongoDB connected'))
.catch((err) => console.log(err));

app.use(routes);
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
}); //start the server on the specified port number and log a message to the console when the server is running and app is an instance of the express app created earlier. 