export default class Currency {
  constructor(code, name) {
    // If code is not a string or name is not a string, throw an error
    if (typeof code !== 'string' || typeof name !== 'string') {
      throw new Error('Invalid argument type');
    }
    // Set the code and name properties
    this._code = code;
    this._name = name;
  }

  // getter and setter for code
  get code() {
    return this._code;
  }

  set code(value) {
    if (typeof value !== 'string') {
      throw new Error('Code must be a string');
    }
    this._code = value;
  }

  // getter and setter for name
  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new Error('Name must be a string');
    }
    this._name = value;
  }

  // Method to display the full currency
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
