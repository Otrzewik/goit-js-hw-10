import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_XbW5iBuU8EttrhwiEX4921aI7eXHHPsb7vxztiC8wwfdkQL0spqW1eGjvpQwzt3U';

export const fetchBreeds = () => {
  return axios.get('https://api.thecatapi.com/v1/breeds');
};

export const fetchCatByBreed = breedId => {
  return axios.get(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`
  );
};
