import axios from 'axios';

const BASE_URL = 'https://api.mapbox.com/geocoding/v5/mapbox.places';
const ACCESS_TOKEN =
  'pk.eyJ1Ijoib3NjYXItYWd1aWxhciIsImEiOiJja3l3YnZ5MGUwNnd0MzBycjhtOHdjaXRhIn0.kduexE9aYiNCaP0Hm50Zzw';

const searchApi = axios.create({
  baseURL: BASE_URL,
  params: {
    limit: 5,
    language: 'es',
    access_token: ACCESS_TOKEN,
  },
});

export default searchApi;
