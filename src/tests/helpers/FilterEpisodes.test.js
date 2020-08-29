import FilterEpisodes from '../../helpers/FilterEpisodes';

describe('testing filter episodes helper', () => {
  test('filter all episodes', () => {
    const filter = 'All';
    const episodes = [
      {
        season: 1,
        episode: 1,
      },
      {
        season: 2,
        episode: 1,
      },
      {
        season: 2,
        episode: 2,
      },
    ];
    expect(FilterEpisodes(filter, episodes)).toStrictEqual([
      {
        season: 1,
        episode: 1,
      },
      {
        season: 2,
        episode: 1,
      },
      {
        season: 2,
        episode: 2,
      },
    ]);
  });
  test('filter episodes by given season', () => {
    const filter = '1';
    const episodes = [
      {
        season: 1,
        episode: 1,
      },
      {
        season: 2,
        episode: 1,
      },
      {
        season: 2,
        episode: 2,
      },
    ];
    expect(FilterEpisodes(filter, episodes)).toStrictEqual([{
      season: 1,
      episode: 1,
    }]);
  });
});
