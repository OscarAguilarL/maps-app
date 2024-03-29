/* eslint import/no-webpack-loader-syntax: off */
// @ts-ignore
import { Map, Marker } from '!mapbox-gl';
import { MapSate } from './MapProvider';

type MapAction =
  | { type: 'setMap'; payload: Map }
  | { type: 'setMarkers'; payload: Marker[] };

export const mapReducer = (state: MapSate, action: MapAction): MapSate => {
  switch (action.type) {
    case 'setMap':
      return {
        ...state,
        isMapReady: true,
        map: action.payload,
      };

    case 'setMarkers':
      return {
        ...state,
        markers: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
