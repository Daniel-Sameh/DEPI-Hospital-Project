const express = require('express')
const app = express()
app.use(express.json());
const cors = require('cors');
require('dotenv').config();
const debug = require("debug")("app:development");
debug.enabled=true;
const Joi = require("joi");
Joi.objectId = require("joi-objectId")(Joi);
const URI = process.env.MONGODB_URI
const port = process.env.PORT || 5000;


const doctors = require("./routes/doctors");
const departments = require("./routes/departments");
const blogs = require("./routes/blogs");
///////////////////////////////////////////////////

const mongoose = require("mongoose");
mongoose.connect(URI)
.then(()=>{
  debug("Connected to MongoDB Successfully!");
})
.catch((err)=>{
  debug("Couldn't connect to mongodb with error: ",err);
});

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
/**************************************************************************************************/
// Serve AdminLTE files
// app.use('/adminlte', express.static(path.join(__dirname, 'node_modules', 'admin-lte')));

// Serve Font Awesome from node_modules
// app.use('/fontawesome', express.static(path.join(__dirname, 'node_modules', '@fortawesome', 'fontawesome-free')));

// Set the view engine to EJS
app.set('view engine', 'ejs');
/**************************************************************************************************/


app.listen(port, () => debug(`hospital server listening on port ${port}!`))