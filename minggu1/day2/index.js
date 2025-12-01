import http from "http";
import moment from "moment/moment.js";
import { infoWaifu } from "./data/info.js";
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
    res.write(JSON.stringify(infoWaifu));

    //yami
  } else if (url === "/waifu/yami") {
    res.write(JSON.stringify(infoWaifu.yami));
  } else if (url === "/waifu/yami/name") {
    res.write(JSON.stringify(infoWaifu.yami.name));
  } else if (url === "/waifu/yami/real_name") {
    res.write(JSON.stringify(infoWaifu.yami.real_name));
  } else if (url === "/waifu/yami/age") {
    res.write(JSON.stringify(infoWaifu.yami.age));
  } else if (url === "/waifu/yami/likes") {
    res.write(JSON.stringify(infoWaifu.yami.likes));
  } else if (url === "/waifu/yami/image") {
    res.write(JSON.stringify(infoWaifu.yami.image));

    //yue
  } else if (url === "/waifu/yue") {
    res.write(JSON.stringify(infoWaifu.yue));
  } else if (url === "/waifu/yue/name") {
    res.write(JSON.stringify(infoWaifu.yue.name));
  } else if (url === "/waifu/yue/real_name") {
    res.write(JSON.stringify(infoWaifu.yue.real_name));
  } else if (url === "/waifu/yue/age") {
    res.write(JSON.stringify(infoWaifu.yue.age));
  } else if (url === "/waifu/yue/likes") {
    res.write(JSON.stringify(infoWaifu.yue.likes));
  } else if (url === "/waifu/yue/image") {
    res.write(JSON.stringify(infoWaifu.yue.image));

    //victorique
  } else if (url === "/waifu/victorique") {
    res.write(JSON.stringify(infoWaifu.victorique));
  } else if (url === "/waifu/victorique/name") {
    res.write(JSON.stringify(infoWaifu.victorique.name));
  } else if (url === "/waifu/victorique/real_name") {
    res.write(JSON.stringify(infoWaifu.victorique.real_name));
  } else if (url === "/waifu/victorique/likes") {
    res.write(JSON.stringify(infoWaifu.victorique.likes));
  } else if (url === "/waifu/victorique/image") {
    res.write(JSON.stringify(infoWaifu.victorique.image));

    //error
  } else {
    res.write(JSON.stringify({ status:"error", message:"page not found" }));
  }

  res.end();
});


const hostname = "127.0.0.1";
const port = 3000;
server.listen(port, hostname, () => {
  console.log(`Server running at ${hostname}:${port} on ${moment().calendar()}`);
});
