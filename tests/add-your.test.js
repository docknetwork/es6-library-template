import MyIndex from '../src/index';

describe('Default test', () => {
  test('MyIndex test', () => {
    const index = new MyIndex();
    expect(index.isTrue(true)).toBe(true);
  });
});
