const express = require('express')
const app = express()
app.use(express.json());
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const debug = require("debug")("app:development");
debug.enabled=true;

const URI = process.env.MONGODB_URI
const port = process.env.PORT || 5000;


const doctors = require("./routes/doctors");
const departments = require("./routes/departments");
const blogs = require("./routes/blogs");
const appointments = require("./routes/appointments");
const doctor = require("./routes/views/doctors");
const blog = require("./routes/views/blogs");
const appointment = require("./routes/views/appointments")
///////////////////////////////////////////////////

const mongoose = require("mongoose");
mongoose.connect(URI)
.then(()=>{
  debug("Connected to MongoDB Successfully!");
})
.catch((err)=>{
  debug("Couldn't connect to mongodb with error: ",err);
});
const Joi = require("joi");
Joi.objectId = require("joi-objectId")(Joi);
/**************************************************************************************************/
//built-in middleware function:
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use('/uploads', express.static('uploads'));
app.use(cors());
/**************************************************************************************************/
// Main Server APIs for the frontend:
app.use("/api/doctors", doctors);
app.use("/api/departments", departments);
app.use("/api/blogs", blogs);
app.use("/api/appointments", appointments);
app.use("/doctors", doctor);
app.use("/blogs", blog);
app.use("/appointments", appointment);
/**************************************************************************************************/
// Serve AdminLTE files
app.use('/adminlte', express.static(path.join(__dirname, 'node_modules', 'admin-lte')));

// Serve Font Awesome from node_modules
app.use('/fontawesome', express.static(path.join(__dirname, 'node_modules', '@fortawesome', 'fontawesome-free')));

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Login route
app.get("/login", (req, res) => {
  res.render("login");
});

 
/**************************************************************************************************/


// app.listen(port, () => debug(`hospital server listening on port ${port}!`))
module.exports = app;  // Add this at the end of your index.js

// And for local running
if (require.main === module) {
  app.listen(port, () => debug(`hospital server listening on port ${port}!`));
}