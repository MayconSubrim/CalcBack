export class CalcModel {
  constructor(public a: number, public b: number) {}

  isValid(): boolean {
    return typeof this.a === 'number' && typeof this.b === 'number';
  }
}