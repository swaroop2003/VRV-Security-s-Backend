const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
dotenv.config(); // Load environment variables from .env file

mongoose.set('strictQuery', false);
const mongoUrl = process.env.MONGO_URL 
app.use(express.json());
app.use(cors());
 
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
})
  .then(async () => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));


app.use(require('./Routes/RBAC'));


app.listen(5000, () => {
  console.log("Server Started");
});
