// const { connect } = require("./play");
// const { setupInput } = require("./input");

let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  
  return stdin;
};

const handleUserInput = function (key) {
  if (key === 'w'){
    connection.write("Move: up")
  };
  if (key === 'a') {
    connection.write('Move: left')
  };
  if (key === 's') {
    connection.write('Move: down')
  };
  if (key === 'd') {
    connection.write('Move: right')
  };
};

// console.log("Connecting ...");
// connect();

// setupInput();

module.exports = {setupInput}