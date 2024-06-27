export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new Error('Invalid argument type');
    }
    this._sqft = sqft;
    this.evacuationWarningMessage();
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof value !== 'number') {
      throw new Error('Sqft must be a number');
    }
    this._sqft = value;
  }

  static evacuationWarningMessage() {
    if (this.constructor.name !== 'Building') throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
