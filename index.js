const express = require("express");
const app = express();
const port = 3000;
app.use(express.json()); // <==== parse request body as JSON
app.use((req, res, next) => {

  next();
});

app.get("/", (req, res) => {
  //   res.json({ msg: "Got a GET request in JSOn" });
  res.send("Got a GET request");
});
app.post("/", (req, res) => {
  res.send("Got a POST request");
});
app.put("/user", (req, res) => {
  res.send("Got a PUT request at /user");
});

app.delete("/user", (req, res) => {
  res.send("Got a DELETE request at /user");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
