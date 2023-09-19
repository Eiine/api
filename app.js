import express from "express";
import cors from "cors";
const app = express();
const port = 3000;

//config
app.use(express.json());

app.use(cors("*"));
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
