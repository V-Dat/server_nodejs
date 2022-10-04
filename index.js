/** import  */
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const router = require("./src/routes/index.js");
const connectionDatabase = require("./connectionDatabase.js");

/** config  */
dotenv.config();
const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    method: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/** connect DB */
connectionDatabase();

/** router  */
router(app);

/** listener  */
const PORT = process.env.PORT || 8080;
const listener = app.listen(PORT, () => {
  console.log(
    "server is running and listening on port " + listener.address().port
  );
});
