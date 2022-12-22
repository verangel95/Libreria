if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const morgan = require("morgan");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

//inicializaciones

const app = express();
require("./database");

//Settings

const PORT = process.env.PORT | 3000;

//middlewares

app.use(morgan("dev"));
app.use(cors());
const storage = multer.diskStorage({
  destination: path.join(__dirname, "public/uploads"),
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
app.use(multer({ storage }).single("image"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes

app.use("/api/books", require("./routes/books"));

// static files

app.use(express.static(path.join(__dirname, "public")));

//start the server

app.listen(PORT, () => {
  console.log(`Server on PORT ${PORT}`);
});
