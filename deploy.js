import { createServer } from "http";

function deploy() {
  const server = createServer(function (_req, res) {
    res.writeHead(200);
    res.end("Hello, World!");
  });
  server.listen(8080);
}

export default deploy;
