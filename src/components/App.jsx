import Home from 'pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import About from 'pages/About/About';
import Contacts from 'pages/Contacts/Contacts';
import Carrier from 'pages/Carrier/Carrier';
import CargoOwner from 'pages/CargoOwner/CargoOwner';
import CreateTransportationForm from 'pages/CreateTransportationForm/CreateTransportationForm';
import MyShip from 'pages/MyShip/MyShip';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="carrier" element={<Carrier />} />
        <Route path="cargo_owner" element={<CargoOwner />} />
        <Route path="about" element={<About />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="create" element={<CreateTransportationForm />} />
        <Route path="myship" element={<MyShip />} />
      </Route>
    </Routes>
  );
};
