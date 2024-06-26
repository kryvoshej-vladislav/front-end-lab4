const path = require("path");
const express = require("express");
const app = express();

const port = 8000;
const host = "localhost";

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

app.listen(port, () => {
  console.log(`Application running on http://${host}:${port}`);
});
