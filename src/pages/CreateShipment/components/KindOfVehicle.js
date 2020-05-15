import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Radio } from "antd";

import CardContent from "../../../components/ContentCard";
import { selectVehicle } from "../../../actions";

const vehicles = [
  {
    label: "Cargo",
    value: "cargo",
  },
  {
    label: "Auto",
    value: "car",
  },
  {
    label: "Moto",
    value: "motorcycle",
  },
  {
    label: "Bicicleta",
    value: "bicycle",
  },
  {
    label: "Caminando",
    value: "walking",
  },
];

const KindOfVehicle = () => {
  const dispatch = useDispatch();
  const vehicle = useSelector((state) => state.kindOfVehicle);

  return (
    <CardContent
      title={
        <span>¿En qué tipo de vehículo deseas realizar tus entregas?</span>
      }
    >
      <Radio.Group
        onChange={(e) => dispatch(selectVehicle(e.target.value))}
        defaultValue={vehicle}
      >
        {vehicles.map(({ label, value }) => (
          <Radio.Button key={label} value={value}>
            {label}
          </Radio.Button>
        ))}
      </Radio.Group>
    </CardContent>
  );
};

export default KindOfVehicle;
