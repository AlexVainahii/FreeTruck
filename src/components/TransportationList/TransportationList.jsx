import React from 'react';
import ArrowRight from '../../images/4-arrows-right.png';
import {
  Container,
  Image,
  Rout,
  StyledLink,
  TransportationItem,
} from './TransportationList.styled';

const TransportationList = ({ transportations }) => {
  return (
    <Container>
      {transportations.map(transportation => (
        <StyledLink
          to={`/transportation/${transportation.id}`}
          key={transportation.id}
        >
          <TransportationItem>
            <Rout>
              <div>Замовлення # </div>
              <div>{transportation.id}</div>
              <div>Вага вантажу </div>
              <div>{transportation.cargoWeight}</div>
            </Rout>
            <Rout>
              <div>Вантажовідправник:</div>
              {transportation.customer ? (
                <div> {transportation.customer}</div>
              ) : (
                <div>Немає</div>
              )}
            </Rout>
            <Rout>
              <div>Перевізник</div>
              {transportation.carrier ? (
                <div>{transportation.carrier}</div>
              ) : (
                <div>Немає</div>
              )}
            </Rout>
            <Rout>
              <div>Початковий пункт: </div>
              <div>{transportation.startLocation}</div>
              <div> {transportation.startDate}</div>
            </Rout>
            <Rout>
              <Image src={ArrowRight} alt="right" />
            </Rout>

            <Rout>
              <div>Кінцевий пункт:</div>
              <div> {transportation.endLocation}</div>
              <div> {transportation.endDate}</div>
            </Rout>
          </TransportationItem>
        </StyledLink>
      ))}
    </Container>
  );
};

export default TransportationList;
