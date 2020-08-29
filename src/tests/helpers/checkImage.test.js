import checkImage from '../../helpers/checkImage';
import notFound from '../../assets/images/notfound.jpg';

describe('testing checkimage helper', () => {
  test('test if image exist', () => {
    const episode = {
      name: 'test',
      image: {
        original: null,
      },
    };
    expect(checkImage(episode)).toEqual(notFound);
  });
  test('test if image original exist', () => {
    const episode = {
      name: 'test',
      image: {
        original: 'test image',
      },
    };
    expect(checkImage(episode)).toMatch('test image');
  });
  test('test if image does not exists', () => {
    const episode = {
      name: 'test',
      image: null,
    };
    expect(checkImage(episode)).toEqual(notFound);
  });
});
