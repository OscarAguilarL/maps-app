import { ChangeEvent, useRef } from 'react';

export const SearchBar = () => {
  const debounceRef = useRef<NodeJS.Timeout>();

  const onQueryChange = (ev: ChangeEvent<HTMLInputElement>) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      // TODO: ejecutar consulta
      console.log('value:', ev.target.value);
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
