import express from "express";
const app = express();
const port = 3000;
//config
app.use(express.json());

app.get("/", (req, res) => {
  console.log("hola mundo");
  res.send("hola estoy aqui miguel");
});
app.post("/", (req, res) => {
  const data = req.body;
  res.send(data);
});

app.listen(port, () => {
  console.log("server runin on port: " + port);
});
