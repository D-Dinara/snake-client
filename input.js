const { MOVE_UP_KEY, MOVE_DOWN_KEY, MOVE_LEFT_KEY, MOVE_RIGHT_KEY, EXIT, USER_MESSAGES } = require('./constants');
// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  //event listener for user inputs
  stdin.on("data", handleUserInput);
  return stdin;
};

// the function takes in a key pressed on the keyboard and sends the appropriate command to the server
const handleUserInput = function(key) {

  //terminate the program if ctrl+c is pressed
  if (key === EXIT) {
    process.exit();
  }

  //send "move up" command to the server if "w" is pressed
  if (key === MOVE_UP_KEY) {
    connection.write("Move: up");
  }

  //send "move left" command to the server if "a" is pressed
  if (key === MOVE_LEFT_KEY) {
    connection.write("Move: left");
  }

  //send "move down" command to the server if "s" is pressed
  if (key === MOVE_DOWN_KEY) {
    connection.write("Move: down");
  }

  //send "move right" command to the server if "d" is pressed
  if (key === MOVE_RIGHT_KEY) {
    connection.write("Move: right");
  }

  //send a user message to the server when a corresponding key is pressed
  for (const objKey in USER_MESSAGES) {
    if (key === objKey) {
      connection.write(`Say: ${USER_MESSAGES[objKey]}`);
    }
  }
};

module.exports = { setupInput };