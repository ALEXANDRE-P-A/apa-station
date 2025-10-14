const path = require("path");
const express = require("express");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/src/index.html"));
});

app.listen(PORT,_=>{
  console.log(`Application listening at PORT ${PORT}`);
})