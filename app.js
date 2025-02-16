const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const port = 3000;

app.get("/names", (req, res) => {
  res.send("Indhu");
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
