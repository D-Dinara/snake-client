const IP = "localhost";
const PORT = 50541;
const NAME = "DDI";
const MOVE_UP_KEY = "w";
const MOVE_DOWN_KEY = "s";
const MOVE_LEFT_KEY = "a";
const MOVE_RIGHT_KEY = "d";
const EXIT = "\u0003"; //ctrl+c
const USER_MESSAGES = {
  h: "Hello!", //"Hello" if "h" is pressed
  o: "Oops!", //"Oops!" if "o" is pressed
  b: "Buy!", //"Buy!" if "b" is pressed
  y: "Yummy!", //"Yummy!" if "b" is pressed
};

module.exports = {
  IP,
  PORT,
  NAME,
  MOVE_UP_KEY,
  MOVE_DOWN_KEY,
  MOVE_LEFT_KEY,
  MOVE_RIGHT_KEY,
  EXIT,
  USER_MESSAGES,
};