import { useEffect, useReducer } from 'react';
import { getUserLocation } from '../../helpers';

import { searchApi } from '../../apis';
import { PlacesContext } from './PlacesContext';
import { placesReducer } from './placesReducer';

export interface PlacesState {
  isLoading: boolean;
  userLocation?: [number, number];
}

const INITIAL_STATE: PlacesState = {
  isLoading: true,
  userLocation: undefined,
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const PlacesProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE);

  useEffect(() => {
    getUserLocation().then((lngLat) =>
      dispatch({ type: 'setUserLocation', payload: lngLat })
    );
  }, []);

  const searchPlacesByQuery = async (query: string) => {
    if (query.length === 0) return []; // todo: limpiar state
    if (!state.userLocation) throw new Error('No hay ubicación del usuario');

    const resp = await searchApi.get(`/${query}.json`, {
      params: {
        proximity: state.userLocation.join(','),
      },
    });

    console.log(resp.data);

    return resp.data;
  };

  return (
    <PlacesContext.Provider value={{ ...state, searchPlacesByQuery }}>
      {children}
    </PlacesContext.Provider>
  );
};
