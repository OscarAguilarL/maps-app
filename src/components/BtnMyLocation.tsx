import { useContext } from 'react';
import { MapContext, PlacesContext } from '../context';

export const BtnMyLocation = () => {
  const { map, isMapReady } = useContext(MapContext);
  const { userLocation } = useContext(PlacesContext);

  const onClick = () => {
    if (!isMapReady) throw new Error('El mapa no está listo');
    if (!userLocation) throw new Error('No hay ubicación de usuario');

    map?.flyTo({
      center: userLocation,
      zoom: 14
    });
  };

  return (
    <button
      className="btn btn-primary"
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 999,
      }}
      onClick={onClick}
    >
      Mi ubicación
    </button>
  );
};
