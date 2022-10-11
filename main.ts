import os from "os";

import express from "express";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.get("*", (req, res) => {
  console.log("Hello OCI");
  return res.send(`Hello OCI from ${os.hostname()}\n`);
});

app.listen(PORT, () => {
  console.log("Hello OCI server is running", PORT);
});
