'use strict';


const minimist = require('minimist'); // works with command line args

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

    const input = new Input();
    const note = new Note(input)
    input.valid() ? note.execute() : help();

    class Note {

      constructor(options){
        this.action = options.command.action;
        this.payload = options.command.payload;
      }
    }



  // -b is the body.
  getPayload(body = undefined) {

    try {
      return JSON.parse(body);
    }
    catch (e) {
      return body;
    }
  }
