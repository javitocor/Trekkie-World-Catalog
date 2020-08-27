const FilterEpisodes = (filter, episodes) => ((filter === 'All') ? episodes : episodes.filter(episode => episode.season === filter));

export default FilterEpisodes;
