'use strict';

const mongoose = require('mongoose');

// blueprint for our data and the type of data for each property
const notes = mongoose.Schema({
  note: { type: String, required: true },
//   category: { type: String, uppercase: true, enum: ['SCHOOL', 'WORK', 'PERSONAL', 'MISC']}
});

module.exports = mongoose.model('notes', notes);