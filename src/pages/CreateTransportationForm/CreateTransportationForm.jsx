import React, { useState, useEffect } from 'react';
import Autocomplete from 'react-google-autocomplete';
import {
  FormContainer,
  FormTitle,
  Form,
  FormField,
  SubmitButton,
  TabContainer,
  TabButton,
  ResponsiveContainer,
  Content,
  MainContent,
} from './CreateTransportationForm.styled';

const CreateTransportationForm = () => {
  const [activeTab, setActiveTab] = useState('carrier');
  const [cargoWeight, setCargoWeight] = useState('');
  const [startLocation, setStartLocation] = useState('');
  const [endLocation, setEndLocation] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    // Виконати логіку збереження даних перевезення
    // Наприклад, відправити дані на сервер

    // Очистити форму
    setCargoWeight('');
    setStartLocation('');
    setEndLocation('');
  };

  return (
    <Content>
      <MainContent>
        <ResponsiveContainer>
          <FormContainer>
            <TabContainer>
              <TabButton
                active={activeTab === 'carrier' ? 'true' : 'false'}
                onClick={() => setActiveTab('carrier')}
              >
                Для Перевізника
              </TabButton>
              <TabButton
                active={activeTab === 'cargoOwner' ? 'true' : 'false'}
                onClick={() => setActiveTab('cargoOwner')}
              >
                Для Власника Вантажу
              </TabButton>
            </TabContainer>
            <FormTitle>
              {activeTab === 'carrier'
                ? 'Створення перевізника'
                : 'Створення власника вантажу'}
            </FormTitle>
            <Form onSubmit={handleSubmit}>
              <FormField>
                <label>Вага вантажу:</label>
                <input
                  type="text"
                  id="cargoWeight"
                  value={cargoWeight}
                  onChange={e => setCargoWeight(e.target.value)}
                />
              </FormField>
              <FormField>
                <label>Початковий пункт:</label>
                <Autocomplete
                  apiKey="AIzaSyD-sRP2iRTrGGf74-cZMrX1Q7Zch-9mfR0"
                  onPlaceSelected={place =>
                    setStartLocation(place.formatted_address)
                  }
                  types={['(regions)']}
                />
              </FormField>
              <FormField>
                <label>Кінцевий пункт:</label>
                <Autocomplete
                  apiKey="AIzaSyD-sRP2iRTrGGf74-cZMrX1Q7Zch-9mfR0"
                  onPlaceSelected={place =>
                    setEndLocation(place.formatted_address)
                  }
                  types={['(regions)']}
                />
              </FormField>
              <SubmitButton type="submit">Створити</SubmitButton>
            </Form>
          </FormContainer>
        </ResponsiveContainer>
      </MainContent>
    </Content>
  );
};

export default CreateTransportationForm;
