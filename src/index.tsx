import React from 'react';
import ReactDOM from 'react-dom';

import { MapsApp } from './MapsApp';

if (!navigator.geolocation) {
  alert('Tu navegador no tiene acceso a la geolocalización');
  throw new Error('Tu navegador no tiene acceso a la geolocalización');
}

ReactDOM.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>,
  document.getElementById('root')
);
