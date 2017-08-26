export class Admincontent {
    id: number;
    description = '';
     
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}
