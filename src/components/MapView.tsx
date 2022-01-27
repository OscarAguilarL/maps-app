import { useContext } from "react";
import { Loading } from ".";
import { PlacesContext } from "../context";

import '../styles.css';

export const MapView = () => {

  const { isLoading, userLocation } = useContext(PlacesContext);

  if(isLoading) {
    return <Loading />
  }

  return (
    <div>
      {userLocation?.join(', ')}
    </div>
  );
};
