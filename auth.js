const express = require("express");
const app = express();
const port = 3000;

const bodyParser = require("body-parser"); // Middleware for parsing request bodies
app.use(bodyParser.urlencoded({ extended: false }));

// app.use((req, res, next) => {
//   req.next();
// });

app.use(express.json()); // <==== parse request body as JSON
app.post("/login", (req, res) => {
  //   console.log(req);
  //   console.log(req.body.username, req.body.password);
//   res.locals.message = "<h1>hi";
  res.json(req.body);
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
