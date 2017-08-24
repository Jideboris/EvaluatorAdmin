import {LeftMenu} from './leftmenu';

describe('LeftMenu', () => {
  it('should create an instance', () => {
    expect(new LeftMenu()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    const leftmenu = new LeftMenu({
      description: 'hello',
      active: true
    });
    expect(leftmenu.description).toEqual('hello');
    expect(leftmenu.active).toEqual(true);
  });
});
