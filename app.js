import express from "express";
import cors from "cors";
import { createJsonApi, saveQueryBack } from "send-http-axios-doc";
const app = express();
const port = 3000;

//config
app.use(express.json());
app.use(express.static("send"));
app.use(cors("*"));
app.get("/home", (req, res) => {
  console.log("hola mundo");
  res.send("hola estoy aqui miguel");
});
app.post("/home", (req, res) => {
  const data = req.body;
  res.send(data);
});

app.use("/saveQuery", saveQueryBack);
createJsonApi(app, port);
app.listen(port, () => {
  console.log("server runin on port: " + port);
});
