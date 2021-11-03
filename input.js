const { connect } = require("./client");
const { setupInput } = require("./input");

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (data) {
  
};

console.log("Connecting ...");
connect();

setupInput();

module.exports = {setupInput}