const path = require("path");
const express = require("express");
const favicon = require("serve-favicon");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(favicon(path.join(__dirname, "/public/favicon.ico")));

app.get("/", (req, res) => {
  app.use("/", express.static(path.join(__dirname, "src")));
  res.sendFile(path.join(__dirname, "src", "index.html"));
});

app.get("/todo-app", (req, res) => {
  app.use("/static", express.static(path.join(__dirname, "todo-app", "static")));
  app.use("/", express.static(path.join(__dirname, "todo-app")));
  res.sendFile(path.join(__dirname, "todo-app", "index.html"));
});

app.get("/music-sampler", (req, res) => {
  app.use("/static", express.static(path.join(__dirname, "music-sampler", "static")));
  app.use("/", express.static(path.join(__dirname, "music-sampler")));
  res.sendFile(path.join(__dirname, "music-sampler", "index.html"));
});

app.get("/camera-app", (req, res) => {
  app.use("/static", express.static(path.join(__dirname, "camera-app", "static")));
  app.use("/", express.static(path.join(__dirname, "camera-app")));
  res.sendFile(path.join(__dirname, "camera-app", "index.html"));
});

app.get("/typing-game", (req, res) => {
  app.use("/static", express.static(path.join(__dirname, "typing-game", "static")));
  app.use("/", express.static(path.join(__dirname, "typing-game")));
  res.sendFile(path.join(__dirname, "typing-game", "index.html"));
});

app.listen(PORT,_=>{
  console.log(`Application listening at PORT ${PORT}`);
})