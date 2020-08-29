import callAPI from '../../helpers/API';

describe('tests the api call', () => {
  test('should receive an object from the API', () => {
    const show = 'TOS';
    callAPI(show).then(data => {
      expect(typeof data).toBe('object');
    }).catch(() => {

    });
  });
  test('the method fetches de episodes', () => {
    const show = 'TOS';
    callAPI(show).then(data => {
      expect(data).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            airstamp: '1966-09-08T16:00:00+00:00',
          }),
        ]),
      );
    }).catch(() => {

    });
  });
});
test('the method fetches de seasons', () => {
  const show = 'TOS';
  callAPI(show, 0).then(data => {
    expect(data).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          premiereDate: '1966-09-08',
        }),
      ]),
    );
  }).catch(() => {

  });
});
