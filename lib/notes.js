
const schema = require('../models/notes-schema');

class Note {
    constructor(options) {
        this.action = options.command.action;
        this.payload = options.command.payload;
        // { note: 'my note', category: 'school' }
    }
    execute(payload) {
        switch (this.action) {
            case 'add':
                this.add();
                break;
            case 'list':
                this.list();
                break
            default:
                console.error('Something went wrong');
        };
    };

    add(){
        let newRecord = new schema({note: this.payload})
        return newRecord.save()
    }
 list(){
      console.log('Note.list()')
      console.log(schema.find({}).resolve())
    }

};

module.exports = Note;