'use strict';

// index.js - Your application’s “entry point”
// Requires the library files you will be writing (input, notes)
// Instantiates an “Input” parser
// Sends properly parsed input to the Notes library for display

/* eslint-disable */
const Notes = require('./lib/notes')
const Input = require('./lib/input')
options.valid() ? http.fetch(options) : help();

function help() {
  console.log(`
  api USAGE: api -m <method> -u <url> -b '<body>'

   -b - Body to send for post/put/patch
        Enclosed in single quotes
        JSON must be valid
  `);

  process.exit();
}

// pair programming with Morgan


    const input = new Input();
    const note = new Note(input)
    input.valid() ? note.execute() : help();

    