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
  if (key === '\u0003') {
    process.exit();
  }

  //send "move up" command to the server if "w" is pressed
  if (key === 'w') {
    connection.write("Move: up");
  }

  //send "move left" command to the server if "a" is pressed
  if (key === 'a') {
    connection.write("Move: left");
  }

  //send "move down" command to the server if "s" is pressed
  if (key === 's') {
    connection.write("Move: down");
  }

  //send "move right" command to the server if "d" is pressed
  if (key === 'd') {
    connection.write("Move: right");
  }

  //send "Hello" message if "h" is pressed
  if (key === 'h') {
    connection.write("Say: Hello!");
  }

  //send "Oops!" message if "o" is pressed
  if (key === 'o') {
    connection.write("Say: Oops!");
  }

  //send "Buy!" message if "b" is pressed
  if (key === 'b') {
    connection.write("Say: Buy!");
  }

  //send "Yummy!" message if "y" is pressed
  if (key === 'y') {
    connection.write("Say: Yummy!");
  }
};

module.exports = { setupInput };