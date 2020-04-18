
// lib/notes.js
// Exports a constructor function
// Compose a prototype method that can execute the correct (any) operation, given the above object
// How will you use that object to run the correct method?
// You can predict that add won’t be the only action we’re going to have to handle…
// Write a prototype method called add() that will create an object representing a note (with an ID and the note text as properties) and console.log the text of the note to be added when the add command is executed

class Note {

    constructor(options){
      this.action = options.command.action;
      this.payload = options.command.payload;
    }
    getPayload(body = undefined) {
    
      try {
        return JSON.parse(body);
      }
      catch (e) {
        return body;
      }
    }
}



// -b is the body.

modules.exports=Note;