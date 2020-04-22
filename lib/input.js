'use strict';

const minimist = require('minimist'); // works with command line args
const Validator = require('./validator');

class Input {

    constructor() {
      let args = minimist(process.argv.slice(2));
      this.command = this.parse(args);
    }
    parse(args){
      let argsTranslate = {
        a:'add',
        add:'add',
        l: 'list',
        list: 'list',
        d: 'delete',
        delete: 'delete'
      };

      let firstArg = Object.keys(args).filter(bananna => {
        return argsTranslate[bananna]
      })[0];

      // console.log('firstArg', firstArg)

      return {
        action: argsTranslate[firstArg],
        payload: args[firstArg]
      };
    };

    valid(){
        const schema = {
            action: {action: 'string', required: true},
            payload: {payload: 'string', required: false}
        }
        
        const validator = new Validator(schema);
        
        console.log('this.command:', this.command)
        return validator.isValid(this.command);
    //  return !!(this.command.action && this.command.payload);
    }

}

    module.exports = Input;
