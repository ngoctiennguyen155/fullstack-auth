const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 8081;

app.use(express.static(path.join(__dirname, "../Client/build")));

app.use(cors());
app.use(express.json());

app.get("/api/auth/login", (req, res) => {
  res.json({ token: "connected", user: { name: "tien" } });
});
app.post("/api/auth/login", (req, res) => {
  res.json({ token: "connected", user: { name: "tien" } });
});
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../Client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
