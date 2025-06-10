const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/webhook", (req, res) => {
  const from = req.body.From;
  const body = req.body.Body;
  console.log(`📩 Recibido de ${from}: ${body}`);

  res.set("Content-Type", "text/xml");
  res.send(
    `<Response><Message>¡Hola! Recibimos tu mensaje: "${body}" 👋</Message></Response>`
  );
});

app.get("/", (req, res) => res.send("Webhook activo ✅"));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Escuchando en puerto ${port}`));
