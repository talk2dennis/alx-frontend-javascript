export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new Error('Invalid argument type');
    }
    this._sqft = sqft;
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
  if (this.constructor !== Building && !this.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
