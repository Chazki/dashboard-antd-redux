import React, { useState, useEffect } from "react";
import { Input, Alert, Typography } from "antd";

import AutocompleteInput from "../../../components/AutocompleteInput";
import { handlePlaceChanged, handleMessage } from "../../../lib/Helpers";
import CustomDrawer from "./CustomDrawer";
import Map from "../../../components/Map";

const { Title } = Typography;

const initialState = {
  productName: null,
  landMark: "",
  address: null,
  location: null,
};

const CreatePickupWithDrawer = ({
  openDrawer,
  onClose,
  optionSelected,
  handleUpdateDropoffOption,
}) => {
  const [mapInstance, setMapInstance] = useState(null);
  const [info, setInfo] = useState(initialState);

  const handleCloseDrawer = () => {
    onClose();
  };

  const handleCheckDrawer = () => {
    if (
      !isNull("productName") &&
      !isNull("address") &&
      handleErrors("address").length === 0 &&
      handleErrors("productName").length === 0
    ) {
      // update point
      handleUpdateDropoffOption(optionSelected.id, {
        productName: info.productName,
        dropoffInfo: {
          direction: info.address,
          landMark: info.landMark,
          location: info.location,
        },
      });

      handleMessage("success", "El punto fue agregado correctamente");

      onClose();
    } else handleMessage("error", "Llene correctamente los campos");
  };

  const handleAutocompleteInputLoad = (instace) => {
    setMapInstance(instace);
  };

  const handleAutocompleteInputPlaceChanged = () => {
    handlePlaceChanged(mapInstance, info, setInfo);
  };

  const handleChangeInfo = (ev) => {
    setInfo({ ...info, [ev.target.name]: ev.target.value });
  };

  const isEmpty = (key) => {
    return info[key].length === 0;
  };

  const isNull = (key) => {
    return info[key] === null;
  };

  const handleErrors = (key) => {
    switch (key) {
      case "address": {
        if (!isNull(key))
          switch (true) {
            case isEmpty(key):
              return "La dirección es obligatoria";
            case isNull("location"):
              return "Ingrese una dirección válida (seleccione una opción)";
            default:
              break;
          }
        return "";
      }
      case "productName": {
        if (!isNull(key) && isEmpty(key)) return "El nombre es obligatorio";
        return "";
      }
      default:
        break;
    }
  };

  useEffect(() => {
    if (optionSelected)
      setInfo({
        productName: optionSelected.productName,
        address: optionSelected.dropoffInfo.direction,
        landMark: optionSelected.dropoffInfo.landMark,
        location: optionSelected.dropoffInfo.location,
      });
  }, [openDrawer, optionSelected]);

  return (
    <CustomDrawer
      openDrawer={openDrawer}
      onClose={handleCloseDrawer}
      onSuccess={handleCheckDrawer}
      title="Editar entrega"
    >
      <Input
        size="large"
        value={info.productName}
        name="productName"
        placeholder="Nombre del producto"
        onChange={handleChangeInfo}
      />
      {handleErrors("productName").length > 0 && (
        <Alert message={handleErrors("productName")} type="error" showIcon />
      )}
      <AutocompleteInput
        name="address"
        style={{ marginTop: "20px" }}
        placeholder="Dirección"
        value={info.address}
        onLoad={handleAutocompleteInputLoad}
        onPlaceChanged={handleAutocompleteInputPlaceChanged}
        onChange={handleChangeInfo}
      />
      {handleErrors("address").length > 0 && (
        <Alert message={handleErrors("address")} type="error" showIcon />
      )}
      <Input
        style={{ marginTop: "20px" }}
        size="large"
        name="landMark"
        placeholder="Observaciones"
        value={info.landMark}
        onChange={handleChangeInfo}
      />
      {info.location && (
        <React.Fragment>
          <Title level={4} style={{ marginTop: 20 }}>
            Dirección seleccionada:
          </Title>
          <Map
            style={{ marginTop: 10 }}
            dropoffPoints={[
              {
                lat: info.location.coordinates[1],
                lng: info.location.coordinates[0],
              },
            ]}
          />
        </React.Fragment>
      )}
    </CustomDrawer>
  );
};

export default CreatePickupWithDrawer;
