const mongoose = require("mongoose");
// file is imported so file is exucuted
const app = require("./app");
const config = require("./config/config");
const express = require("express");
const userRoutes = require("./routes/v1/user.route")

let server;

// TODO: CRIO_TASK_MODULE_UNDERSTANDING_BASICS - Create Mongo connection and get the express app to listen on config.port
app.use(express.json());

mongoose
  .connect(`${config.mongoose.url}`,config.mongoose.options)
  .then(()=>{
    console.log(`connected to mongoDB to url ${config.mongoose.url}`)
    server = app.listen(config.port,()=>{
      console.log(`listening on port ${config.port}`)
    })
  })

// mongoose
//   .connect(config.mongoose.url,config.mongoose.options)
//   .then(() => console.log("Connected to DB at", config.mongoose.url))
//   .catch((error) => console.log("Failed to connect to DB\n", error));

// app.listen(config.port,() => {
//     console.log(`Example app listening on port ${config.port}`)
//   })
