import React, { useState } from "react";
import { Col, message } from "antd";

import ContentCard from "../../../components/ContentCard";
import AutocompleteInput from "../../../components/AutocompleteInput";
import { useDispatch } from "react-redux";
import { addPickupPoint, addDropoffPoint } from "../../../actions";

const getPointInfo = (address) => {
  return {
    formattedAddress: address.getPlace().formatted_address,
    coordinates: {
      lat: address.getPlace().geometry.location.lat(),
      lng: address.getPlace().geometry.location.lng(),
    },
  };
};

const handleMessage = (type, msg) => {
  switch (type) {
    case "success":
      message.success(msg);
      break;
    case "error":
      message.error(msg);
      break;
    default:
      message.open("Mensaje no especificado");
  }
};

const handlePlaceChanged = (state, setState) => {
  if (state.instance !== null) {
    setState({
      ...state,
      formattedAddress: state.instance.getPlace().formatted_address,
      point: getPointInfo(state.instance),
    });
  }
};

const Points = () => {
  const dispatch = useDispatch();

  const [pickupInfo, setPickupInfo] = useState({
    instance: null,
    point: null,
    formattedAddress: "",
  });

  const [dropoffInfo, setDropoffInfo] = useState({
    instance: null,
    point: null,
    formattedAddress: "",
  });

  return (
    <Col lg={10} xs={24}>
      <ContentCard
        headStyle={{ padding: 0 }}
        style={{ backgroundColor: "#F4F6F8" }}
        title="Información de retiro"
        bodyStyle={{ padding: 0 }}
      >
        <AutocompleteInput
          size="large"
          placeholder="Ingrese una dirección de retiro"
          value={pickupInfo.formattedAddress}
          onLoad={(pickupInstance) =>
            setPickupInfo({ ...pickupInfo, instance: pickupInstance })
          }
          onPlaceChanged={() => handlePlaceChanged(pickupInfo, setPickupInfo)}
          onChange={(e) =>
            setPickupInfo({
              ...pickupInfo,
              formattedAddress: e.target.value,
            })
          }
          onClick={() => {
            if (pickupInfo.point) {
              dispatch(addPickupPoint(pickupInfo.point));
              setPickupInfo({
                ...pickupInfo,
                point: null,
                formattedAddress: "",
              });
              handleMessage(
                "success",
                "La dirección de retiro fue agregada correctamente"
              );
            } else
              handleMessage(
                "error",
                "Especifique una dirección de retiro válida"
              );
          }}
        />
      </ContentCard>
      <ContentCard
        headStyle={{ padding: 0 }}
        style={{ backgroundColor: "#F4F6F8" }}
        title="Información de entrega"
        bodyStyle={{ padding: 0 }}
      >
        <AutocompleteInput
          size="large"
          placeholder="Ingrese una dirección de entrega"
          value={dropoffInfo.formattedAddress}
          onLoad={(dropoffInstance) =>
            setDropoffInfo({ ...dropoffInfo, instance: dropoffInstance })
          }
          onPlaceChanged={() => handlePlaceChanged(dropoffInfo, setDropoffInfo)}
          onChange={(e) =>
            setDropoffInfo({
              ...dropoffInfo,
              formattedAddress: e.target.value,
            })
          }
          onClick={() => {
            if (dropoffInfo.point) {
              dispatch(addDropoffPoint(dropoffInfo.point));
              setDropoffInfo({
                ...dropoffInfo,
                point: null,
                formattedAddress: "",
              });
              handleMessage(
                "success",
                "La dirección de entrega fue agregada correctamente"
              );
            } else
              handleMessage(
                "error",
                "Especifique una dirección de entrega válida"
              );
          }}
        />
      </ContentCard>
    </Col>
  );
};

export default Points;
