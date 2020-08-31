import ShowsObject from '../../helpers/ShowsObject';

describe('tests ShowsObject method functionality', () => {
  test('test object return for TOS', () => {
    expect(ShowsObject('TOS').name).toMatch('Star Trek - The Original Series');
  });
  test('test object return for TNG', () => {
    expect(ShowsObject('TNG').episodes).toMatch('178');
  });
  test('test object return for VOY', () => {
    expect(ShowsObject('VOY').seasons).toMatch('7');
  });
  test('test object return for DS9', () => {
    expect(ShowsObject('DS9').premiered).toMatch('1993-01-03');
  });
  test('test object return for ENT', () => {
    expect(ShowsObject('ENT').image).toMatch('http://static.tvmaze.com/uploads/images/original_untouched/6/15045.jpg');
  });
  test('test object return for DIS', () => {
    expect(ShowsObject('DIS')).toHaveProperty('seasons', '2');
    expect(ShowsObject('DIS')).toMatchObject({
      name: 'Star Trek - Discovery',
      description: '<p>Star Trek, one of the most iconic and influential global television franchises, returns 50 years after it first premiered, with <b>Star Trek: Discovery</b>. The series will feature a new ship, new characters and new missions, while embracing the same ideology and hope for the future that inspired a generation of dreamers and doers.</p>',
      seasons: '2',
      episodes: '29',
      premiered: '2017-09-24',
      image: 'http://static.tvmaze.com/uploads/images/original_untouched/237/592644.jpg',
    });
  });
});
