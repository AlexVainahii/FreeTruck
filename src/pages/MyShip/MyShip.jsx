import React, { useEffect, useState } from 'react';
import { Content, MainContent, Title, TitleContainer } from './MyShip.styled';
import TransportationList from '../../components/TransportationList/TransportationList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../../store/getItems/getItems';
import TransportationFilter from '../../components/TransportationFilter/TransportationFilter';

const MyShip = () => {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  const allTransportations = useSelector(state => state.getItems.items);
  const [filteredTransportations, setFilteredTransportations] =
    useState(allTransportations);
  const [initialFilters, setInitialFilters] = useState({});

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);
  useEffect(() => {
    // Фільтрувати початковий масив
    const FilteredItems = allTransportations.filter(
      item =>
        item.carrier === user.displayName || item.customer === user.displayName
    );
    console.log(FilteredItems, user.displayName);
    setFilteredTransportations(FilteredItems);
  }, [allTransportations]);

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
            <Title>Мої перевезення</Title>
            <TransportationFilter
              initialFilters={initialFilters}
              onFilterChange={handleFilterChange}
              onResetFilters={handleResetFilters}
            />
          </TitleContainer>

          <MainContent>
            <TransportationList
              transportations={filteredTransportations}
              onButton={true}
            />
          </MainContent>
        </>
      )}
    </Content>
  );
};

export default MyShip;
