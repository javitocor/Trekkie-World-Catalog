const checkImage = episode => {
  if (episode.image !== null) {
    if (episode.image.original !== null) {
      return episode.image.original;
    }
  }
  return '../src/assets/images/notfound.jpg';
};

export default checkImage;
