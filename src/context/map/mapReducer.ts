import { Map } from 'mapbox-gl';
import { MapSate } from './MapProvider';

type MapAction = { type: 'setMap'; payload: Map };

export const mapReducer = (state: MapSate, action: MapAction): MapSate => {
  switch (action.type) {
    case 'setMap':
      return {
        ...state,
        isMapReady: true,
        map: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
