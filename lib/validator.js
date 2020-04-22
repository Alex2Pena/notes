'use strict';

class Validator {

  constructor(schema) {
    this.schema = schema;
    /*
    {
        note: { type: 'string, required: true },
        author: {type: 'string', required: true },
        banana: {type: 'boolean', required: false }
    }
    */
  }

  isValid(data) {
    // console.log('isValid data:', data)
    let valid = true;

    for (let fieldName in this.schema) {

      let field = this.schema[fieldName];

      // Am I required and set?
      let required = field.required
        ? this.isTruthy(data[fieldName])
        : true;

      // Am I the right type (if we even care)
      let type = field.type
        ? this.isCorrectType(data[fieldName], field)
        : true;

      // If anything is false ...
      if (!(required && type)) {
        valid = false;
      }

      // console.log(`fieldName: ${fieldName}, required: ${required}, type: ${type}`)
    }

    return valid;
  }

  isCorrectType(input, field) {
    switch (field.type) {
      case 'string': return this.isString(input);
      case 'number': return this.isNumber(input);
      case 'array': return this.isArray(input, field.valueType);
      case 'object': return this.isObject(input);
      case 'boolean': return this.isBoolean(input);
      default: return false;
    }
  }

  isString(input) {
    return typeof input === 'string';
  }

  isObject(input) {
    return typeof input === 'object' && !(input instanceof Array);
  }

  isArray(input, valueType) {
    return Array.isArray(input) && (valueType ? input.every(val => typeof val === valueType) : true);
  }

  isBoolean(input) {
    return typeof input === 'boolean';
  }

  isNumber(input) {
    return typeof input === 'number';
  }

  isFunction(input) {
    return typeof input === 'function';
  }

  isTruthy(input) {
    return !!input;
  }

}

module.exports = Validator;
