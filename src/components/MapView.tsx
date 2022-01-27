import { useContext, useLayoutEffect, useRef } from 'react';
import { Map } from 'mapbox-gl';

import { Loading } from '.';
import { MapContext, PlacesContext } from '../context';

import '../styles.css';

export const MapView = () => {
  const mapDiv = useRef<HTMLDivElement>(null);
  const { isLoading, userLocation } = useContext(PlacesContext);
  const { setMap } = useContext(MapContext);

  useLayoutEffect(() => {
    if (!isLoading) {
      setMap(
        new Map({
          container: mapDiv.current!, // container ID
          style: 'mapbox://styles/mapbox/light-v10', // style URL
          center: userLocation, // starting position [lng, lat]
          zoom: 14, // starting zoom
        })
      );
    }
  }, [isLoading]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div
      ref={mapDiv}
      style={{
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        top: 0,
        left: 0,
      }}
    >
      {userLocation?.join(', ')}
    </div>
  );
};
