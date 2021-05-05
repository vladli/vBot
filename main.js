require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const mySecret = process.env["TOKEN"];

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhostss:${port}`)
);

// ================= START BOT CODE ===================
const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("pong!");
  }
});

client.login(mySecret);
