// 1. Import Dependencies
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const morgan = require('morgan');
const cors = require("cors");

// 2. Import Configurations
const PORT = 3000;

// Define MongoDB connection URI
// server.js




// 3. Import Routes:
const studentRoutes = require('./routes/studentRoutes');
const staffRoutes= require('./routes/staffRoutes');
const courseRoutes= require('./routes/course');
const departmentRoutes= require('./routes/dapartmentRoutes');
const partnersRoutes = require('./routes/partnersRoutes');





// 4. Create a Database connection using the mongoose Library
mongoose
  .connect(mongoUri)
  .then(() => {
    console.log("Database Connection was successful...");
  })

  .catch((err) => {
    console.log(err);
  });


// 5. Create a Web server application instance using the Express library
const app = express();



// 6. Set middlewares for the application
app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.json())




// 7. Set entry points for the REST routes created for the different Collections.
app.use("/api/students", studentRoutes);
app.use("/api/staff", staffRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/departments", departmentRoutes);
app.use("/api/partners",  partnersRoutes);



// 8. Prepare for Production



// 9. Configure the web server application to listen to requests.
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
