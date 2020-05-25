import React from "react";
import { Row } from "antd";
import CardContent from "../../../components/ContentCard";

const convertToCurrency = (number) => {
  const currency = number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  return `S/.${currency}`;
};

const SubPrice = ({ priceName, price, style = {} }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", ...style }}>
      <p style={{ margin: 0 }}>{priceName}</p>
      <p style={{ fontWeight: "bold", margin: 0 }}>{price}</p>
    </div>
  );
};

const PriceDetails = ({ price }) => {
  const prices = [
    {
      name: "Precio de envío",
      price: price.customerPrice,
    },
    {
      name: "Ajustes",
      price: 0,
    },
    {
      name: "Tiempo de espera",
      price: 0,
    },
    {
      name: "Estacionamiento",
      price: 0,
    },
  ];

  const total = {
    name: "Total",
    price: prices.reduce((total, current) => {
      return total + current.price;
    }, 0),
  };

  return (
    <React.Fragment>
      <Row style={{ marginTop: 20 }}>
        <CardContent title="Detalle de precio" headStyle={{ fontSize: 18 }}>
          {prices.map(({ name, price }) => (
            <SubPrice
              key={name}
              priceName={name}
              price={convertToCurrency(price)}
            />
          ))}
          <SubPrice
            priceName={total.name}
            price={convertToCurrency(total.price)}
            style={{ marginTop: 10 }}
          />
        </CardContent>
      </Row>
    </React.Fragment>
  );
};

export default PriceDetails;
