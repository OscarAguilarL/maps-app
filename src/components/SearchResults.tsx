import React, { useContext, useState } from 'react';
import { MapContext, PlacesContext } from '../context';
import { Feature } from '../interfaces/places';
import { LoadingPlaces } from './';

export const SearchResults = () => {
  const { places, isLoadingPlaces } = useContext(PlacesContext);
  const { map } = useContext(MapContext);

  const [activeId, setActiveId] = useState('');

  const onPlaceClick = (place: Feature) => {
    setActiveId(place.id);

    const [lng, lat] = place.center;
    map?.flyTo({
      zoom: 14,
      center: [lng, lat],
    });
  };

  if (isLoadingPlaces) return <LoadingPlaces />;

  if (places.length === 0) return <></>;

  return (
    <ul className="list-group mt-3">
      {places.map((place) => (
        <li
          key={place.id}
          className={`list-group-item list-group-item-action pointer ${
            activeId === place.id ? 'active' : ''
          } `}
          onClick={() => onPlaceClick(place)}
        >
          <h6>{place.text_es}</h6>
          <p
            style={{
              fontSize: '12px',
            }}
          >
            {place.place_name_es}
          </p>
          <button
            className={`btn  btn-sm ${
              activeId === place.id
                ? 'btn-outline-light'
                : 'btn-outline-primary'
            }`}
          >
            Direcciones
          </button>
        </li>
      ))}
    </ul>
  );
};
