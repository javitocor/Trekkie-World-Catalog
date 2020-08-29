import showName from '../../helpers/showName';

describe('tests showname helper functionality', () => {
  test('returns the name of the TOS', () => {
    expect(showName('TOS')).toMatch('Star trek - The Original Series');
  });
  test('returns the name of the TNG', () => {
    expect(showName('TNG')).toMatch('Star trek - The Next Generation');
  });
  test('returns the name of the VOY', () => {
    expect(showName('VOY')).toMatch('Star trek - Voyager');
  });
  test('returns the name of the DS9', () => {
    expect(showName('DS9')).toMatch('Star trek - Deep Space 9');
  });
  test('returns the name of the ENT', () => {
    expect(showName('ENT')).toMatch('Star trek - Enterprise');
  });
  test('returns the name of the DIS', () => {
    expect(showName('DIS')).toMatch('Star trek - Discovery');
  });
});
