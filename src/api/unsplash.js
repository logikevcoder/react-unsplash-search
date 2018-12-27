import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID df60f27eb66a23b53004eae0a93c5ca0fe936e6cea8e7fc53ae38324580c9c56',
  }
});