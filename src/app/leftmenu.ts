export class LeftMenu {
  id: number;
  description = '';
  active = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
