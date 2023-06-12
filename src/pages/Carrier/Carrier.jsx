import React, { useEffect, useState } from 'react';
import { Content, MainContent, Title, TitleContainer } from './Carrier.styled';
import TransportationList from '../../components/TransportationList/TransportationList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../../store/getItems/getItems';
import TransportationFilter from '../../components/TransportationFilter/TransportationFilter';

const Carrier = () => {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  const allTransportations = useSelector(state => state.getItems.items);
  const [filteredTransportations, setFilteredTransportations] = useState(null);
  const [initialFilters, setInitialFilters] = useState({});

  useEffect(() => {
    dispatch(fetchItems);
  }, [dispatch]);

  useEffect(() => {
    // Фільтрувати початковий масив
    if (allTransportations) {
      const FilteredItems = allTransportations.filter(
        item => item.carrier === false && item.customer !== user.displayName
      );
      console.log(FilteredItems, user.displayName);
      setFilteredTransportations(FilteredItems);
    }
  }, [allTransportations, user.displayName]);

  const handleFilterChange = filterValues => {
    const { originCity, destinationCity } = filterValues;

    // Застосувати фільтр до списку перевезень
    const filteredItems = allTransportations.filter(item => {
      if (
        originCity &&
        item.originCity.toLowerCase().includes(originCity.toLowerCase())
      ) {
        return true;
      }
      if (
        destinationCity &&
        item.destinationCity
          .toLowerCase()
          .includes(destinationCity.toLowerCase())
      ) {
        return true;
      }
      return false;
    });

    setFilteredTransportations(filteredItems);
  };

  const handleResetFilters = () => {
    setFilteredTransportations(allTransportations);
    setInitialFilters({});
  };

  return (
    <Content>
      {user && (
        <>
          <TitleContainer>
            <Title>Потребують перевізників</Title>
            <TransportationFilter
              initialFilters={initialFilters}
              onFilterChange={handleFilterChange}
              onResetFilters={handleResetFilters}
            />
          </TitleContainer>

          <MainContent>
            {filteredTransportations && (
              <TransportationList
                transportations={filteredTransportations}
                onButton={false}
              />
            )}
          </MainContent>
        </>
      )}
    </Content>
  );
};

export default Carrier;
