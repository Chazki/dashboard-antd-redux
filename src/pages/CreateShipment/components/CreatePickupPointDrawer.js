import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Input, Button, Drawer, Grid, Alert, Typography } from "antd";

import AutocompleteInput from "../../../components/AutocompleteInput";
import { handleDrawerPickupOption, addPickupOption } from "../../../actions";
import { handlePlaceChanged, handleMessage } from "../../../lib/Helpers";

const { useBreakpoint } = Grid;
const { Title } = Typography;

const defaultPoint = {
  id: null,
  name: null,
  observations: "",
  formattedAddress: null,
  coordinates: {},
};

const CreatePickupPointDrawer = () => {
  const { md } = useBreakpoint();
  const dispatch = useDispatch();
  const openDrawer = useSelector((state) => state.pickupPoints.openDrawer);
  const [instance, setInstance] = useState(null);
  const [newPickupPoint, setNewPickupPoint] = useState(defaultPoint);
  const [nameError, setNameError] = useState(false);
  const [addressError, setAddressError] = useState(false);

  useEffect(() => {
    if (newPickupPoint.name !== null) {
      if (newPickupPoint.name.length === 0) setNameError(true);
      else setNameError(false);
    }
  }, [newPickupPoint.name]);

  useEffect(() => {
    if (newPickupPoint.formattedAddress !== null) {
      if (!newPickupPoint.coordinates.lat && !newPickupPoint.coordinates.lng)
        setAddressError(true);
      else setAddressError(false);
    }
  }, [
    newPickupPoint.formattedAddress,
    newPickupPoint.coordinates.lat,
    newPickupPoint.coordinates.lng,
  ]);

  return (
    <Drawer
      keyboard={false}
      width={!md ? "100%" : 450}
      className="new-shipment-drawer"
      title={
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            shape="circle"
            icon={<CloseOutlined />}
            onClick={() => {
              dispatch(handleDrawerPickupOption());
              setNewPickupPoint(defaultPoint);
              setNameError(false);
              setAddressError(false);
            }}
          />
          <Title level={4}>Agregar retiro</Title>
          <Button
            shape="circle"
            icon={<CheckOutlined />}
            onClick={() => {
              if (
                newPickupPoint.name !== null &&
                newPickupPoint.name.length > 0 &&
                newPickupPoint.coordinates.lat &&
                newPickupPoint.coordinates.lng
              ) {
                dispatch(addPickupOption(newPickupPoint));
                setNewPickupPoint(defaultPoint);
                dispatch(handleDrawerPickupOption());
                handleMessage("success", "Se agregó el retiro exitósamente");
              } else handleMessage("error", "Rellene correctamente los campos");
            }}
          />
        </div>
      }
      placement="right"
      closable={false}
      onClose={() => {
        dispatch(handleDrawerPickupOption());
        setNewPickupPoint(defaultPoint);
        setNameError(false);
        setAddressError(false);
      }}
      visible={openDrawer}
      key="right"
    >
      <Input
        size="large"
        value={newPickupPoint.name}
        placeholder="Nombre"
        onChange={(e) =>
          setNewPickupPoint({ ...newPickupPoint, name: e.target.value })
        }
      />
      {nameError && (
        <Alert message="El nombre es obligatorio" type="error" showIcon />
      )}
      <AutocompleteInput
        style={{ marginTop: "20px" }}
        placeholder="Dirección"
        value={newPickupPoint.formattedAddress}
        onLoad={(pickupInstance) => setInstance(pickupInstance)}
        onPlaceChanged={() =>
          handlePlaceChanged(instance, newPickupPoint, setNewPickupPoint)
        }
        onChange={(e) =>
          setNewPickupPoint({
            ...newPickupPoint,
            formattedAddress: e.target.value,
          })
        }
      />
      {addressError && (
        <Alert
          message="Ingrese una dirección válida (seleccione una opción)"
          type="error"
          showIcon
        />
      )}

      <Input
        style={{ marginTop: "20px" }}
        size="large"
        placeholder="Observaciones"
        value={newPickupPoint.observations}
        onChange={(e) =>
          setNewPickupPoint({
            ...newPickupPoint,
            observations: e.target.value,
          })
        }
      />
    </Drawer>
  );
};
export default CreatePickupPointDrawer;
