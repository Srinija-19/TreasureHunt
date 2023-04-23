require("dotenv").config();
const PORT = process.env.PORT || 1212;
const connectToMongo = require("./config/db");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const path = require("path");

var cors = require("cors");

connectToMongo();

const express = require("express");

//dont worry about rest of the code expect routes which u have to write them on ur own but the rest of them u can get them from the express website
const app = express();

//this is a middleware which is used to parse the input and output in terms of json it is quite important
app.use(cors());
app.use(express.json());

app.use("/api/user", require("./routes/userRoutes"));

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`ChatterBox Running`);
});
