import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID eb219a44c862def69005f3881211c38f1c33bff03295195854c78fc240757a74',
  },
});
