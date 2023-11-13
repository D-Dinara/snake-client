const { setupInput } = require('./input');
const { connect } = require('./client');

//Establish connection to the server
console.log("Connecting ...");
const connection = connect();

// pass the object returned from connect() into the setupInput function
setupInput(connection);