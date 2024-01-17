const express = require("express");
const dotenv = require("dotenv").config();
const contactRoutes = require("./routes/contactRoutes");
const errorHandler = require("./middleware/errorhandler");
const connectDb = require("./config/dbConnection");

connectDb();

const app = express();
const port = process.env.PORT || 5000;

// Middleware for logging request bodies
app.use((req, res, next) => {
    console.log(`Incoming Request Body: ${JSON.stringify(req.body)}`);
    next();
});

app.use(express.json());

app.use("/api/contacts", require ("./routes/contactRoutes"));
app.use("/api/users",require ("./routes/userRoutes") );


app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
