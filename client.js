const net = require('net');
const { IP, PORT } = require('./constants');
// const {connect} = require('./play');
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log(data);
  });

  conn.on('connect', () => { 
    conn.write("Name: MCN")
    conn.write('Say: wwwwhhhhhhheeeeeeeeee')
    conn.write('Say: leggoooo')
  });
  conn.on('connect', (connect) => { //when client connects, shows this message
    console.log("Successfully connected to game server");
  });

  return conn;
};
module.exports = {connect};