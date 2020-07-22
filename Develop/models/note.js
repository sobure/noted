const orm = require("../config/orm.js");

class Note {
  getNotes() {
    return orm.selectAll("notes")
  }
  addkNote(values) {
    return orm.create("notes", ['note', 'bookId'], values)
  }
  deleteBookNote(value) {
    return orm.delete("notes", 'id', value)
  }
  
};

module.exports = new Note();
