// 1. Import Dependencies
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const morgan = require('morgan');
const cors = require("cors");

// 2. Import Configurations

const { mongoUri, PORT } = require("./config");

// 3. Import Routes:



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
app.get("/", (req, res) => {
  res.send("hello cse-js-3");
});


// 8. Prepare for Production



// 9. Configure the web server application to listen to requests.
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
