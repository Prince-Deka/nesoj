// server.js (or equivalent)
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');
const connectDB = require("./utils/db");
const contactRoute = require("./routes/contact-router");
const authRoute = require("./routes/auth-router")
const newsRoute = require("./routes/news-router");
const photosRoute = require("./routes/gallery-router");
const videosRoute = require("./routes/gallery-router");
const errorMiddleware = require("./middlewares/error-middleware");
const nesojExecutivesRoute = require("./routes/nesojExe-router");


// Handling Cors Policy
const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
};
app.use(cors(corsOptions));



app.use(express.json());
//  This line of code adds Express middleware that parses incoming request bodies with JSON payloads. It's important to place this before any routes that need to handle JSON data in the request body. This middleware is responsible for parsing JSON data from requests, and it should be applied at the beginning of your middleware stack to ensure it's available for all subsequent route handlers.

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use('/api/data', newsRoute, photosRoute, videosRoute, nesojExecutivesRoute);



//Get

app.use(errorMiddleware);
// Start the server on port 3000
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is listening on port: ${PORT}`);
    });
});
