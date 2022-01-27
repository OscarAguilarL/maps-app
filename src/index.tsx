import React from 'react';
import ReactDOM from 'react-dom';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

import { MapsApp } from './MapsApp';

if (!navigator.geolocation) {
  alert('Tu navegador no tiene acceso a la geolocalización');
  throw new Error('Tu navegador no tiene acceso a la geolocalización');
}

mapboxgl.accessToken = 'pk.eyJ1Ijoib3NjYXItYWd1aWxhciIsImEiOiJja3l3YnZ5MGUwNnd0MzBycjhtOHdjaXRhIn0.kduexE9aYiNCaP0Hm50Zzw';

ReactDOM.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>,
  document.getElementById('root')
);
