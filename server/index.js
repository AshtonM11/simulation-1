const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const controller = require("./controller");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());
app.use(cors());
massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(err => console.log(err));

app.get("/api/products", controller.getAll);
app.get("/api/product", controller.getOne);
app.post("/api/product", controller.create);
app.put("/api/product", controller.update);
app.delete("/api/product/:id", controller.delete);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
