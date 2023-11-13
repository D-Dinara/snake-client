const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  //event handler: console.log a message after the connection to the server is established;
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  });

  //sends client's name to the server after the connection is established;
  conn.on("connect", () => {
    conn.write("Name: DDI");
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //event handler: handles incoming data from the server and console.log it for the player
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });
  return conn;
};

module.exports = { connect };