import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Input, Button, Drawer, Grid, Alert, Typography } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

import AutocompleteInput from "../../../components/AutocompleteInput";
import {
  addDropoffOption,
  handleDrawerDropoffOption,
  updateDropoffOption,
  cancelEditDropoffOption,
} from "../../../actions";
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

const DropoffPointsDrawer = ({
  title,
  edit = false,
  point = defaultPoint,
  openDrawer = false,
}) => {
  const { md } = useBreakpoint();
  const dispatch = useDispatch();
  const { idOnEdit, options } = useSelector((state) => state.dropoffPoints);
  const [instance, setInstance] = useState(null);
  const [nameError, setNameError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [newDropoffPoint, setNewDropoffPoint] = useState(defaultPoint);

  const close = () => {
    if (edit) {
      dispatch(cancelEditDropoffOption());
    } else {
      dispatch(handleDrawerDropoffOption());
      setNewDropoffPoint(defaultPoint);
    }
    setNameError(false);
    setAddressError(false);
  };

  const save = () => {
    if (
      newDropoffPoint.name !== null &&
      newDropoffPoint.name.length > 0 &&
      newDropoffPoint.formattedAddress.length > 0 &&
      newDropoffPoint.coordinates.lat &&
      newDropoffPoint.coordinates.lng
    ) {
      if (!edit) {
        dispatch(addDropoffOption(newDropoffPoint));
        dispatch(handleDrawerDropoffOption(edit));
        handleMessage("success", "Se creó la nueva entrega exitósamente");
      } else {
        dispatch(updateDropoffOption(newDropoffPoint.id, newDropoffPoint));
        handleMessage("success", "Se actualizó la entrega exitósamente");
      }
      setNewDropoffPoint(defaultPoint);
    } else handleMessage("error", "Rellene correctamente los campos");
  };

  useEffect(() => {
    if (edit) setNewDropoffPoint(options.find(({ id }) => id === idOnEdit));
  }, [idOnEdit, edit, options]);

  useEffect(() => {
    if (newDropoffPoint.name !== null) {
      if (newDropoffPoint.name.length === 0) setNameError(true);
      else setNameError(false);
    }
  }, [newDropoffPoint.name]);

  useEffect(() => {
    if (newDropoffPoint.formattedAddress !== null) {
      if (
        newDropoffPoint.formattedAddress.length === 0 ||
        (!newDropoffPoint.coordinates.lat && !newDropoffPoint.coordinates.lng)
      )
        setAddressError(true);
      else setAddressError(false);
    }
  }, [
    newDropoffPoint.formattedAddress,
    newDropoffPoint.coordinates.lat,
    newDropoffPoint.coordinates.lng,
  ]);

  return (
    <Drawer
      keyboard={false}
      visible={openDrawer}
      className="dropoff-points-drawer"
      onClose={close}
      title={
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button shape="circle" icon={<CloseOutlined />} onClick={close} />
          <Title level={4}>{title}</Title>
          <Button shape="circle" icon={<CheckOutlined />} onClick={save} />
        </div>
      }
      width={!md ? "100%" : 700}
      closable={false}
      placement="right"
      key="right"
    >
      <AutocompleteInput
        placeholder="Dirección"
        value={newDropoffPoint.formattedAddress}
        onLoad={(dropoffInstance) => setInstance(dropoffInstance)}
        onPlaceChanged={() =>
          handlePlaceChanged(instance, newDropoffPoint, setNewDropoffPoint)
        }
        onChange={(e) =>
          setNewDropoffPoint({
            ...newDropoffPoint,
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
        value={newDropoffPoint.name}
        placeholder="Nombre del producto"
        onChange={(e) =>
          setNewDropoffPoint({ ...newDropoffPoint, name: e.target.value })
        }
      />
      {nameError && (
        <Alert message="El nombre es obligatorio" type="error" showIcon />
      )}

      <Input
        style={{ marginTop: "20px" }}
        size="large"
        placeholder="Observaciones"
        value={newDropoffPoint.observations}
        onChange={(e) =>
          setNewDropoffPoint({
            ...newDropoffPoint,
            observations: e.target.value,
          })
        }
      />
    </Drawer>
  );
};

export default DropoffPointsDrawer;
