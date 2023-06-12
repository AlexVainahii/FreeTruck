import React from 'react';
import ArrowRight from '../../images/4-arrows-right.png';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Tooltip from '@mui/material/Tooltip';
import CancelIcon from '@mui/icons-material/Cancel';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import {
  Container,
  Image,
  Rout,
  StyledLink,
  TransportationItem,
} from './TransportationList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateItem } from 'store/items/itemsSlice';

const TransportationList = ({ transportations, onButton }) => {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  const handleChangeCarrier = transportations => {
    const updatedItems = {
      id: transportations.id,
      ...transportations,
      carrier: user.displayName,
      carrierTrue: true,
    };
    dispatch(updateItem(updatedItems));
  };
  const handleChangeCostumer = transportations => {
    const updatedItems = {
      id: transportations.id,
      ...transportations,
      customer: user.displayName,
      cargoOwnerTrue: true,
      cargoWeight: transportations.maxWeight,
    };
    dispatch(updateItem(updatedItems));
  };
  const handleChangeCarrierTrue = transportations => {
    const updatedItems = {
      id: transportations.id,
      ...transportations,
      carrierTrue: true,
      shipmentTrue: true,
    };
    dispatch(updateItem(updatedItems));
  };
  const handleChangeCostumerTrue = transportations => {
    const updatedItems = {
      id: transportations.id,
      ...transportations,
      cargoOwnerTrue: true,
      shipmentTrue: true,
    };
    dispatch(updateItem(updatedItems));
  };
  const handleCancelTrue = transportations => {
    if (
      transportations.customer === user.displayName &&
      transportations.cargoOwnerTrue
    ) {
      const updatedItems = {
        id: transportations.id,
        ...transportations,
        cargoOwnerTrue: false,
        customer: false,
      };
      dispatch(updateItem(updatedItems));
    } else {
      const updatedItems = {
        id: transportations.id,
        ...transportations,
        carrierTrue: false,
        carrier: false,
      };
      dispatch(updateItem(updatedItems));
    }
  };
  const handleDelete = transportations => {
    const removeItems = {
      id: transportations.id,
    };
    dispatch(removeItem(removeItems));
  };
  return (
    <Container>
      {transportations.map(transportation => (
        <StyledLink
          to={`/transportation/${transportation.id}`}
          key={transportation.id}
        >
          <TransportationItem
            style={{
              backgroundColor:
                transportation.shipmentTrue && 'rgba(141, 198, 158, 0.8)',
            }}
          >
            <Rout>
              <div>Замовлення №</div>
              <div>{transportation.id}</div>
              {transportation.cargoWeight ? (
                <>
                  <div>Вага вантажу </div>
                  <div>{transportation.cargoWeight}</div>
                </>
              ) : (
                <>
                  <div> Вага </div>
                  <div>для перевезення </div>
                  <div>{transportation.maxWeight}</div>
                </>
              )}
            </Rout>
            <Rout
              style={{
                backgroundColor:
                  transportation.shipmentTrue === false
                    ? transportation.customer === false
                      ? 'rgba(197, 98, 98, 0.8)'
                      : 'rgba(194, 199, 101, 0.8)'
                    : 'rgba(141, 198, 158, 0.8)',
              }}
            >
              <div>Вантажовідправник:</div>
              {transportation.customer ? (
                <div> {transportation.customer}</div>
              ) : (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>Немає</div>
                  {user.displayName !== transportation.carrier && (
                    <Tooltip title="Перевезти свій вантаж">
                      <CheckCircleOutlineIcon
                        style={{ color: 'green', cursor: 'pointer' }}
                        onClick={() => handleChangeCostumer(transportation)}
                      />
                    </Tooltip>
                  )}
                </div>
              )}
            </Rout>
            <Rout
              style={{
                backgroundColor:
                  transportation.shipmentTrue === false
                    ? transportation.carrier === false
                      ? 'rgba(197, 98, 98, 0.8)'
                      : 'rgba(194, 199, 101, 0.8)'
                    : 'rgba(141, 198, 158, 0.8)',
              }}
            >
              <div>Перевізник</div>
              {transportation.carrier ? (
                <div>{transportation.carrier}</div>
              ) : (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>Немає</div>
                  {user.displayName !== transportation.customer && (
                    <Tooltip title="Перевезти цей вантаж">
                      <CheckCircleOutlineIcon
                        style={{ color: 'green', cursor: 'pointer' }}
                        onClick={() => handleChangeCarrier(transportation)}
                      />
                    </Tooltip>
                  )}
                </div>
              )}
            </Rout>
            <Rout>
              <div>Початковий пункт: </div>
              <div>{transportation.originCity}</div>
              <div> {transportation.startDate}</div>
            </Rout>
            <Rout>
              <Image src={ArrowRight} alt="right" />
            </Rout>

            <Rout>
              <div>Кінцевий пункт:</div>
              <div> {transportation.destinationCity}</div>
              <div> {transportation.endDate}</div>
            </Rout>
            {onButton && !transportation.shipmentTrue && (
              <Rout style={{ width: '5%' }}>
                {transportation.carrier !== user.displayName &&
                  transportation.carrierTrue && (
                    <Tooltip title="Погодити перевезення вантажу">
                      <DoneOutlineIcon
                        style={{ color: 'green', cursor: 'pointer' }}
                        onClick={() => handleChangeCarrierTrue(transportation)}
                      />
                    </Tooltip>
                  )}
                {transportation.customer !== user.displayName &&
                  transportation.cargoOwnerTrue && (
                    <Tooltip title="Погодити перевізника">
                      <DoneOutlineIcon
                        style={{ color: 'green', cursor: 'pointer' }}
                        onClick={() => handleChangeCostumerTrue(transportation)}
                      />
                    </Tooltip>
                  )}
                {transportation.shipmentTrue === false &&
                transportation.creator === user.displayName ? (
                  <Tooltip title="Видалити своє  перевезення повністю">
                    <DeleteIcon
                      style={{ color: 'red', cursor: 'pointer' }}
                      onClick={() => handleDelete(transportation)}
                    />
                  </Tooltip>
                ) : (
                  <Tooltip title="Відмовитись від перевезення">
                    <CancelIcon
                      style={{ color: 'red', cursor: 'pointer' }}
                      onClick={() => handleCancelTrue(transportation)}
                    />
                  </Tooltip>
                )}
              </Rout>
            )}
          </TransportationItem>
        </StyledLink>
      ))}
    </Container>
  );
};

export default TransportationList;
