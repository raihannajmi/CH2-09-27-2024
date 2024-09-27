const http = require("http");

const server = http.createServer((req, res) => {
  console.log("req.url", req.url);
  const pathUrl = req.url;

  if (pathUrl === "/yogi") {
    res.end("Hello FSW 2 !!!");
  }
});

server.listen(3000, "127.0.0.1", () => {
  console.log(`Your App running in 127.0.0.1:3000`);
});
