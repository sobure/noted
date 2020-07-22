var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
class ORM  {
  constructor(connection){
    this.connection = connection
  }

  printQuestionMarks(numberOfValuesOrColumns, type){
    const questionMarks = [];

    for (var i = 0; i < numberOfValuesOrColumns; i++) {
      if(type === 'cols'){
        questionMarks.push("??");
      } else {
        questionMarks.push("?")
      } 
    }
    return questionMarks.join(', ');
  }

  create(table, columns, values) {
    const queryString = `INSERT INTO ?? (${columns.join(', ')}) VALUES (${this.printQuestionMarks(values.length, 'vals')})`;

    return this.connection.query(queryString, [table, ...values])
  }

  delete(table, cols, value){
    const queryString = 'DELETE FROM ?? WHERE ??=?';

    return this.connection.query(queryString, [table, cols, value])
  }
};

module.exports = new ORM(connection);