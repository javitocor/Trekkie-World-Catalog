import notFound from '../assets/images/notfound.jpg';

const checkImage = episode => {
  if (episode.image !== null) {
    if (episode.image.original !== null) {
      return episode.image.original;
    }
  }
  return notFound;
};

export default checkImage;
