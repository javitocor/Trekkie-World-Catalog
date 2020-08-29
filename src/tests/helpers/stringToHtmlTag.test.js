import stringToHtmlTag from '../../helpers/stringToHtmlTag';

describe('tests stringtohtmltag method functionality', () => {
  test('convert and string with an html into an html tag', () => {
    const str = '<p>Hello World</p>';
    expect(stringToHtmlTag(str)).toEqual('Hello World');
  });
});
