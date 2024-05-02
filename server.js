// 1. Import Dependencies
const express = require("express");


// 2. Import Configurations
const PORT = 3000;

// 3. Import Routes:

// 4. Create a Database connection using the mongoose Library


// 5. Create a Web server application instance using the Express library
const app = express();


// 6. Set middlewares for the application

// 7. Set entry points for the REST routes created for the different Collections.
app.get("/", (req,res)=> {
    res.send("hello cse-js-3");
})


// 8. Configure the web server application to listen to requests.
app.listen (PORT, ()=> console.log(`server running on port ${PORT}`));