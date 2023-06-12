import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import {
  FormContainer,
  FormTitle,
  Form,
  FormField,
  SubmitButton,
  ResponsiveContainer,
  Content,
  MainContent,
  TabContainer,
  TabHeader,
  TabButton,
  List,
  ListItem,
  TabButton1,
} from './CreateTransportationForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../store/items/itemsSlice';
const CreateTransportationForm = () => {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    if (month < 10) {
      month = `0${month}`;
    }
    if (day < 10) {
      day = `0${day}`;
    }

    return `${year}-${month}-${day}`;
  };
  const [isActive, setIsActive] = useState(true);
  const [originCity, setOriginCity] = useState(null);
  const [destinationCity, setDestinationCity] = useState(null);
  const [originValue, setOriginValue] = useState('');
  const [destinationValue, setDestinationValue] = useState('');
  const [originCoordinates, setOriginCoordinates] = useState(null);
  const [destinationCoordinates, setDestinationCoordinates] = useState(null);
  const [maxWeight, setMaxWeight] = useState(250);
  const [cargoWeight, setCargoWeight] = useState(250);
  const [suggestedOrigins, setSuggestedOrigins] = useState([]);
  const [suggestedDestinations, setSuggestedDestinations] = useState([]);
  const [distance, setDistance] = useState('');
  const [startDate, setStartDate] = useState(getCurrentDate());
  const [endDate, setEndDate] = useState(getCurrentDate());
  const [selectedVehicleMake, setSelectedVehicleMake] = useState('');

  const handleTabChange = tab => {
    setIsActive(!isActive);
  };

  const handleOriginCityChange = async event => {
    const value = event.target.value;
    if (value === '') {
      setOriginCoordinates(null);
    }
    setOriginValue(value);
    try {
      const response = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
          value
        )}&key=4b6e7d31f0654074aa698fd64a45063c`
      );
      const suggestions = response.data.results;
      setSuggestedOrigins(suggestions);
    } catch (error) {
      console.log('Помилка запиту геокодування:', error.message);
      setSuggestedOrigins([]);
    }
  };

  const handleDestinationCityChange = async event => {
    const value = event.target.value;
    if (value === '') {
      setDestinationCoordinates(null);
    }
    setDestinationValue(value);
    try {
      const response = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
          value
        )}&key=4b6e7d31f0654074aa698fd64a45063c`
      );
      const suggestions = response.data.results;
      setSuggestedDestinations(suggestions);
    } catch (error) {
      console.log('Помилка запиту геокодування:', error.message);
      setSuggestedDestinations([]);
    }
  };

  const handleSuggestionOriginSelected = suggestion => {
    if (suggestion.components) {
      console.log(suggestion);
      const { city } = suggestion.components;
      setOriginCity(city);
      console.log(suggestion.geometry);
      setOriginCoordinates(suggestion.geometry);
    }
    setSuggestedOrigins([]);
  };

  const handleSuggestionDestinationSelected = suggestion => {
    if (suggestion.components) {
      const { city } = suggestion.components;
      setDestinationCity(city);
      console.log(suggestion.geometry);
      setDestinationCoordinates(suggestion.geometry);
    }
    setSuggestedDestinations([]);
  };

  useEffect(() => {
    const calculateDistance = (originCoordinates, destinationCoordinates) => {
      const lat1 = originCoordinates.lat;
      const lon1 = originCoordinates.lng;
      const lat2 = destinationCoordinates.lat;
      const lon2 = destinationCoordinates.lng;

      const R = 6371; // Radius of the Earth in kilometers
      const dLat = toRadians(lat2 - lat1);
      const dLon = toRadians(lon2 - lon1);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRadians(lat1)) *
          Math.cos(toRadians(lat2)) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const distance = R * c;

      return Math.round(distance.toFixed(2));
    };
    if (originCoordinates && destinationCoordinates) {
      setDistance(calculateDistance(originCoordinates, destinationCoordinates));
    }
  }, [originCoordinates, destinationCoordinates]);
  const toRadians = degrees => {
    return degrees * (Math.PI / 180);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(user);
    let newTransportation = null;
    if (isActive) {
      newTransportation = {
        ...newTransportation,
        originCity,
        destinationCity,
        maxWeight,
        cargoWeight: null,
        distance,
        startDate,
        endDate,
        carrier: user.displayName,
        customer: false,
        selectedVehicleMake,
        carrierTrue: false,
        cargoOwnerTrue: false,
        shipmentTrue: false,
        creator: user.displayName,
      };
    } else {
      newTransportation = {
        ...newTransportation,
        originCity,
        destinationCity,
        maxWeight: null,
        cargoWeight,
        distance,
        startDate,
        endDate,
        selectedVehicleMake,
        carrier: false,
        customer: user.displayName,
        carrierTrue: false,
        cargoOwnerTrue: false,
        shipmentTrue: false,
        creator: user.displayName,
      };
    }
    toast.success('Замовлення успішно оформлено!', {
      position: toast.POSITION.TOP_RIGHT, // Встановлення позиції Toast
      autoClose: 1000, // Автоматичне закриття через 3 секунди
      hideProgressBar: true, // Відображення прогрес-бару
      closeOnClick: true, // Закриття Toast при кліку
      pauseOnHover: true, // Пауза при наведенні курсору
      draggable: true, // Можливість перетягування Toast
    });
    dispatch(addItem(newTransportation));
    setCargoWeight(250);
    setMaxWeight(250);
    setDestinationCity(null);
    setDestinationCoordinates(null);
    setDestinationValue('');
    setDistance(0);
    setEndDate(getCurrentDate());
    setOriginCity(null);
    setOriginCoordinates(null);
    setSelectedVehicleMake('');
    setOriginValue('');
    setStartDate(getCurrentDate());
  };

  const handleStartDateChange = event => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = event => {
    setEndDate(event.target.value);
  };

  const handleVehicleMakeChange = event => {
    setSelectedVehicleMake(event.target.value);
  };

  return (
    <Content>
      <MainContent>
        <ResponsiveContainer>
          <FormContainer>
            <FormTitle>Створити перевезення</FormTitle>
            <TabContainer>
              <TabHeader>
                {isActive ? (
                  <TabButton
                    disabled={true}
                    onClick={() => handleTabChange('carrier')}
                  >
                    Для Перевізника
                  </TabButton>
                ) : (
                  <TabButton1 onClick={() => handleTabChange('carrier')}>
                    Для Перевізника
                  </TabButton1>
                )}
                {isActive ? (
                  <TabButton1 onClick={() => handleTabChange('shipper')}>
                    Для Власника вантажу
                  </TabButton1>
                ) : (
                  <TabButton
                    disabled={true}
                    onClick={() => handleTabChange('shipper')}
                  >
                    Для Власника вантажу
                  </TabButton>
                )}
              </TabHeader>
              <Form onSubmit={handleSubmit}>
                <FormField>
                  <label>Початковий пункт</label>
                  <input
                    type="text"
                    value={originValue}
                    onChange={handleOriginCityChange}
                  />
                </FormField>
                {suggestedOrigins.length !== 0 && (
                  <List>
                    {suggestedOrigins.map(suggestion => (
                      <ListItem
                        key={suggestion.annotations.geohash}
                        onClick={() =>
                          handleSuggestionOriginSelected(suggestion)
                        }
                      >
                        {suggestion.formatted}
                      </ListItem>
                    ))}
                  </List>
                )}
                <FormField>
                  <label>Кінцевий пункт</label>
                  <input
                    type="text"
                    value={destinationValue}
                    onChange={handleDestinationCityChange}
                  />
                </FormField>
                {suggestedDestinations.length !== 0 && (
                  <List>
                    {suggestedDestinations.map(suggestion => (
                      <ListItem
                        key={suggestion.annotations.geohash}
                        onClick={() =>
                          handleSuggestionDestinationSelected(suggestion)
                        }
                      >
                        {suggestion.formatted}
                      </ListItem>
                    ))}
                  </List>
                )}
                {isActive && (
                  <FormField>
                    <label>Марка автомобіля</label>
                    <select
                      value={selectedVehicleMake}
                      onChange={handleVehicleMakeChange}
                    >
                      <option value="">Оберіть марку автомобіля</option>
                      <option value="BMW">BMW</option>
                      <option value="Mercedes-Benz">Mercedes-Benz</option>
                      <option value="Audi">Audi</option>
                      <option value="Volkswagen">Volkswagen</option>
                      <option value="Ford">Ford</option>
                      <option value="Toyota">Toyota</option>
                      <option value="Honda">Honda</option>
                      <option value="Nissan">Nissan</option>
                      <option value="Chevrolet">Chevrolet</option>
                      <option value="Hyundai">Hyundai</option>
                    </select>
                  </FormField>
                )}

                {!isActive ? (
                  <FormField>
                    <label>Вага вантажу</label>
                    <input
                      type="text"
                      value={cargoWeight}
                      onChange={event => setCargoWeight(event.target.value)}
                    />
                  </FormField>
                ) : (
                  <FormField>
                    <label>Максимальна вага вантажу</label>
                    <input
                      type="text"
                      value={maxWeight}
                      onChange={event => setMaxWeight(event.target.value)}
                    />
                  </FormField>
                )}
                <FormField>
                  <label>Відстань</label>
                  <input type="text" value={distance} disabled />
                </FormField>
                <FormField>
                  <label>Початкова дата перевезення</label>
                  <input
                    type="date"
                    value={startDate}
                    min={getCurrentDate()}
                    onChange={handleStartDateChange}
                  />
                </FormField>
                <FormField>
                  <label>Кінцева дата перевезення</label>
                  <input
                    type="date"
                    value={endDate}
                    min={startDate}
                    onChange={handleEndDateChange}
                  />
                </FormField>
                <SubmitButton type="submit">Замовити</SubmitButton>
              </Form>
            </TabContainer>
          </FormContainer>
        </ResponsiveContainer>
      </MainContent>
    </Content>
  );
};

export default CreateTransportationForm;
