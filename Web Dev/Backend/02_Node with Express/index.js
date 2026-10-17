const express = require("express");
const app = express();

let port = 3000;

app.listen(port, () => {
  console.log(`app is listening on ${port}`);
});

app.get("/", (req, res) => {
  res.send("hello, i am root path");
});

app.get("/:username", (req, res) => {
  let { username, id } = req.params;
  res.send(`welcome to page of @${username}`);
});

app.get("/search", (req, res) => {
  console.log(req.query);
  res.send("no result");
});

// app.get("/apple", (req, res) => {
//     res.send("you contacted apple path");
// });

// app.get("/banana", (req, res) => {
//     res.send("you contacted banana path");
// });

// app.get("/*splat", (req, res) => {
//     res.send("this path is not exist");
// });

// app.use((req, res) => {
//     console.log("request received");
//        res.send({
//        name: "Amaan",
//        age:18,
//     });
//     let code =
//         "<h1>Fruits</h1> <ul><li>apple</li><li>banana</li></ul>";

//     res.send(code);

// });
