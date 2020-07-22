const orm = require("../config/orm.js");

class Note {
  getNotes() {
    return orm.selectAll("notes")
  }
  addNote(values) {
    return orm.create("notes", ['note'], values)
  }
  deletekNote(value) {
    return orm.delete("notes", 'id', value)
  }
  
};

module.exports = new Note();
