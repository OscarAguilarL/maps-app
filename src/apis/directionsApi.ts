import axios from 'axios';

const BASE_URL = 'https://api.mapbox.com/directions/v5/mapbox/driving';
const ACCESS_TOKEN =
  'pk.eyJ1Ijoib3NjYXItYWd1aWxhciIsImEiOiJja3l3YnZ5MGUwNnd0MzBycjhtOHdjaXRhIn0.kduexE9aYiNCaP0Hm50Zzw';

const directionsApi = axios.create({
  baseURL: BASE_URL,
  params: {
    alternatives: false,
    geometries: 'geojson',
    overview: 'simplified',
    steps: false,
    access_token: ACCESS_TOKEN,
  },
});

export default directionsApi;
