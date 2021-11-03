const net = require('net');

const {connect} = require('./play');

const conn = net.createConnection({
  host: '165.227.47.243',
  port: 50541
});
conn.on('connect', () => {
  conn.write("Name: MCN");   
});
conn.on('connect', () => {
  conn.write('will this work?');   
});
conn.on('connect', () => {
  conn.write("hellllloo");   
});
conn.on('connect', () => {
//   setInterval(() => {conn.write('Move: up')}, 50);
//   setInterval(() => {conn.write('Move: up')}, 100);
//   setInterval(() => {conn.write('Move: left')}, 150);
//   setInterval(() => {conn.write('Move: left')}, 200);
//   setInterval(() => {conn.write('Move: left')}, 250);
//   setInterval(() => {conn.write('Move: up')}, 300);
//   setInterval(() => {conn.write('Move: up')}, 350);
//   setInterval(() => {conn.write('Move: up')}, 400);
//   setInterval(() => {conn.write('Move: right')}, 450);
//   setInterval(() => {conn.write('Move: right')}, 500);
//   setInterval(() => {conn.write('Move: right')}, 550);
//   setInterval(() => {conn.write('Move: right')}, 600);
});