const express = require("express");

const message = "hello";

const app = express();

app.get("/", (request, response) => {
  console.log("heard");

  response.end("hi");
});

app.listen(8000, () => {
  console.log("server is up");
});
