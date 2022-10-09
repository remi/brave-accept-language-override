const http = require("http");

const requestListener = function (req, res) {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.writeHead(200);

  res.end(`{"message": "${req.headers["accept-language"]}"}`);
};

const server = http.createServer(requestListener);
server.listen(8081);

