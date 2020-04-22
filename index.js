'use strict';

const mongoose = require('mongoose'); // meant to connect us to mongodb - do CRUD
const Input = require('./lib/input');
const Note = require('./lib/notes');


const MONGODB_URI = 'mongodb://localhost:27017/notes-db'; // location of your db
// const Food = require('./models/notes-schema.js'); // pulls in our Food model for instantiation of food items later on


mongoose.connect(MONGODB_URI, { userNewUrlParser: true, useUnifiedTopology: true });

const input = new Input();
const note = new Note(input);
input.valid() ? note.execute() : help();


function help() {
  console.log(`
  api USAGE: api -m <method> -u <url> -b '<body>'

   -b - Body to send for post/put/patch
        Enclosed in single quotes
        JSON must be valid
  `);

  process.exit();
}

mongoose.disconnect();
