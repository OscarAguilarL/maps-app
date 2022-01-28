import { ChangeEvent, useContext, useRef } from 'react';
import { PlacesContext } from '../context';

export const SearchBar = () => {
  const { searchPlacesByQuery } = useContext(PlacesContext);

  const debounceRef = useRef<NodeJS.Timeout>();

  const onQueryChange = (ev: ChangeEvent<HTMLInputElement>) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      searchPlacesByQuery(ev.target.value);
    }, 600);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="form-control"
        placeholder="Buscar lugar..."
        onChange={onQueryChange}
      />
    </div>
  );
};
