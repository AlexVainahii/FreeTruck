import React, { useState } from 'react';
import { Button, FilterContainer, Input } from './TransportationFilter.styled';

const TransportationFilter = ({
  initialFilters,
  onFilterChange,
  onResetFilters,
}) => {
  const [originCity, setOriginCity] = useState(initialFilters.originCity || '');
  const [destinationCity, setDestinationCity] = useState(
    initialFilters.destinationCity || ''
  );

  const handleOriginCityChange = event => {
    setOriginCity(event.target.value);
  };

  const handleDestinationCityChange = event => {
    setDestinationCity(event.target.value);
  };

  const handleFilterClick = () => {
    const filterValues = {
      originCity,
      destinationCity,
    };
    onFilterChange(filterValues);
  };

  const handleResetClick = () => {
    setOriginCity('');
    setDestinationCity('');
    const filterValues = {
      originCity: '',
      destinationCity: '',
    };
    onFilterChange(filterValues);
    onResetFilters();
  };

  return (
    <FilterContainer>
      <Input
        type="text"
        placeholder="Початковий пункт"
        value={originCity}
        onChange={handleOriginCityChange}
      />
      <Input
        type="text"
        placeholder="Кінцевий пункт"
        value={destinationCity}
        onChange={handleDestinationCityChange}
      />
      <Button onClick={handleFilterClick}>Фільтрувати</Button>
      <Button onClick={handleResetClick}>Скинути</Button>
    </FilterContainer>
  );
};

export default TransportationFilter;
