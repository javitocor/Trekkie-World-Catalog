const FilterEpisodes = (filter, episodes) => ((filter === 'All') ? episodes : episodes.filter(episode => episode.season.toString() === filter));

export default FilterEpisodes;
