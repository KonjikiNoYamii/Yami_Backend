import http from "http";
import moment from "moment/moment.js";
import { info } from "./data/info.js";
import { waifu } from "./data/waifu.js";

const server = http.createServer((req, res) => {
  const url = req.url;
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");

  if (url === "/") {
    res.write(JSON.stringify({ status: "Succes", waifu: "waifu" }));

    //global
  } else if (url === "/waifu") {
    res.write(JSON.stringify(waifu));
  } else if (url === "/waifu/info") {
    res.write(JSON.stringify(info));

    //yami
  } else if (url === "/waifu/yami") {
    res.write(JSON.stringify(info.yami));
  } else if (url === "/waifu/yami/name") {
    res.write(JSON.stringify(info.yami.name));
  } else if (url === "/waifu/yami/real_name") {
    res.write(JSON.stringify(info.yami.real_name));
  } else if (url === "/waifu/yami/age") {
    res.write(JSON.stringify(info.yami.age));
  } else if (url === "/waifu/yami/likes") {
    res.write(JSON.stringify(info.yami.likes));
  } else if (url === "/waifu/yami/image") {
    res.write(JSON.stringify(info.yami.image));

    //yue
  } else if (url === "/waifu/yue") {
    res.write(JSON.stringify(info.yue));
  } else if (url === "/waifu/yue/name") {
    res.write(JSON.stringify(info.yue.name));
  } else if (url === "/waifu/yue/real_name") {
    res.write(JSON.stringify(info.yue.real_name));
  } else if (url === "/waifu/yue/age") {
    res.write(JSON.stringify(info.yue.age));
  } else if (url === "/waifu/yue/likes") {
    res.write(JSON.stringify(info.yue.likes));
  } else if (url === "/waifu/yue/image") {
    res.write(JSON.stringify(info.yue.image));

    //victorique
  } else if (url === "/waifu/victorique") {
    res.write(JSON.stringify(info.victorique));
  } else if (url === "/waifu/victorique/name") {
    res.write(JSON.stringify(info.victorique.name));
  } else if (url === "/waifu/victorique/real_name") {
    res.write(JSON.stringify(info.victorique.real_name));
  } else if (url === "/waifu/victorique/age") {
    res.write(JSON.stringify(info.victorique.age));
  } else if (url === "/waifu/victorique/likes") {
    res.write(JSON.stringify(info.victorique.likes));
  } else if (url === "/waifu/victorique/image") {
    res.write(JSON.stringify(info.victorique.image));

    //error
  } else {
    res.write(JSON.stringify({ status: "error", message: "page not found" }));
  }

  res.end();
});

const hostname = "127.0.0.1";
const port = 3000;
server.listen(port, hostname, () => {
  console.log(
    `Server running at ${hostname}:${port} on ${moment().calendar()}`
  );
});
