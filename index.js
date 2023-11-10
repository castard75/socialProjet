const express = require("express");
const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");
require("./config/db");

const path = require("path");

//express json sert a lire les req.body
app.use(express.json());

+(
  //CORS
  app.use(cors())
);
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//HEADERS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );

  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

//route

const usersRoutes = require("./routes/user.routes");

app.use("/api/users", usersRoutes);

//ECOUTE DU PORT
app.listen(5000, () => {
  console.log("connecté");
});
