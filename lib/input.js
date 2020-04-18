'use strict';

// lib/input.js
// Exports a constructor function
// Uses minimist (or any other CLI library) to read command line arguments
// Evaluates and Validates the input (is the command (i.e. ‘-a’) a valid one and is there data)
// Returns an instance containing the action to perform and the payload for the action
// for example:

//   {
//     action: "add";
//     payload: "This is a really cool thing that I wanted to remember for later"
//   }
var minimist = require('minimist'); // works with command line args


class Input {

    constructor() {
      let args = minimist(process.argv.slice(2));
      this.command = this.parse(args);
    }
    parse(args){
      let argsTranslate = {
        a:'add',
        add:'add'
      };
      let firstArg = Object.keys(args).filter(bananna =>{
        argsTranslate[bananna]
      })[0];

      return {
        action: argsTranslate[firstArg],
        payload: args[firstArg]
      };

      valid(){
        return !!(this.command.action && this.command.payload);
      }
    };