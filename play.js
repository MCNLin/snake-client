const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', (connect) => { //when client connects, shows this message
    console.log("Successfully connected to game server");
  });
  
  conn.on("data", (data) => {
    console.log("Idle:", data);
  });
  
  // conn.on("end", (end) => {
  //   console.log("End:", end);
  // });
  return conn;
};

console.log("Connecting ...");

connect();

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = function (data) {
  stdin.on("data", handleUserInput);
};
setupInput();
module.exports = {connect};