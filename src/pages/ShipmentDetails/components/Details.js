import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Row, Col, Grid } from "antd";
import { CaretLeftOutlined } from "@ant-design/icons";

import EditDropoffWithDrawer from "../../CreateShipment/components/EditDropoffWithDrawer";
import MapWithRoutes from "./MapWithRoutes";
import ShipmentTimeline from "./ShipmentTimeline";
import PriceDetails from "./PriceDetails";
import DriverDetails from "./DriverDetails";
import DropoffSelector from "./DropoffSelector";

import {
  getOneShipmentAddPackage,
  getOneShipmentRemovePackage,
  getOneShipmentUpdatePackages,
} from "../../../actions";

const { useBreakpoint } = Grid;

const getPickupCoordinates = (pickup) => ({
  lat: pickup.location.coordinates[1],
  lng: pickup.location.coordinates[0],
});

const getDropoffCoordinates = (packages) => {
  return packages.map(({ dropoffInfo: { location: { coordinates } } }) => ({
    lat: coordinates[1],
    lng: coordinates[0],
  }));
};

const Testing = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { md } = useBreakpoint();
  const { data } = useSelector((state) => state.getOneShipment);
  const [pickup] = useState(data.pickupInfo);
  const [packagesSelected, setPackagesSelected] = useState(
    data.packagesSelected
  );
  const [price] = useState(data.price);
  const [driver] = useState(data.driver);
  const [allPackages, setAllPackages] = useState(data.packages);
  const [openEditDropoffDrawer, setOpenEditDropoffDrawer] = useState(false);
  const [selectDisabled, setSelectDisabled] = useState(true);
  const [optionSelected, setOptionSelected] = useState(null);

  const handleUpdateDropoffOption = (id, changes) => {
    const updatedSelectedPackages = packagesSelected.map((option) => {
      if (option.id === id)
        return {
          ...option,
          ...changes,
        };
      return option;
    });
    const updatedAllPackages = allPackages.map((option) => {
      if (option.id === id)
        return {
          ...option,
          ...changes,
        };
      return option;
    });
    setPackagesSelected(updatedSelectedPackages);
    setAllPackages(updatedAllPackages);

    // dispatch changes
    dispatch(
      getOneShipmentUpdatePackages(updatedSelectedPackages, updatedAllPackages)
    );
  };

  const handleAddPackage = (packId) => {
    const updatedPackagesSelected = [
      ...packagesSelected,
      allPackages.find(({ id }) => id === packId),
    ];
    setPackagesSelected(updatedPackagesSelected);

    // dispatch changes
    dispatch(getOneShipmentAddPackage(updatedPackagesSelected));
  };

  const handleDeletePackage = (packId) => {
    const updatedPackagesSelected = packagesSelected.filter(
      ({ id }) => id !== packId
    );
    setPackagesSelected(updatedPackagesSelected);

    // dispatch changes
    dispatch(getOneShipmentRemovePackage(updatedPackagesSelected));
  };

  const handleEditOption = (option) => {
    setOptionSelected(option);
    setOpenEditDropoffDrawer(true);
  };

  const handleCloseEditDropoffDrawer = () => {
    setOpenEditDropoffDrawer(false);
  };

  const enableSelect = () => {
    setSelectDisabled(false);
  };

  const updateOptionsSelected = () => {
    setSelectDisabled(true);
  };

  return (
    <React.Fragment>
      <React.Fragment>
        <div
          style={{
            marginBottom: "25px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Button
              shape="circle"
              type="ghost"
              size="middle"
              icon={<CaretLeftOutlined />}
              onClick={() => history.goBack()}
            />
            <span
              style={{
                marginLeft: "10px",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              Volver
            </span>
          </div>
          <div>
            {md && (
              <React.Fragment>
                <Button style={{ margin: "0 5px" }}>Descargar detalles</Button>
                <Button style={{ margin: "0 5px" }}>Descargar etiquetas</Button>
              </React.Fragment>
            )}
            <Button style={{ margin: "0 5px" }} type="primary">
              Cancelar envío
            </Button>
          </div>
        </div>
      </React.Fragment>
      {!md && (
        <React.Fragment>
          <Button style={{ margin: "5px 0", width: "100%" }}>
            Descargar etiquetas
          </Button>
          <Button style={{ margin: "5px 0 20px 0", width: "100%" }}>
            Descargar detalle
          </Button>
        </React.Fragment>
      )}
      {pickup && (
        <MapWithRoutes
          pickupCoordinates={getPickupCoordinates(pickup)}
          dropoffCoordinatesList={getDropoffCoordinates(packagesSelected)}
        />
      )}
      <div style={{ margin: "30px -16px" }}>
        <Row>
          <Col xs={24} md={13} style={{ padding: "16px" }}>
            <DropoffSelector
              handleAddPackage={handleAddPackage}
              handleDeletePackage={handleDeletePackage}
              selectDisabled={selectDisabled}
              packagesSelected={packagesSelected}
              allPackages={allPackages}
              enableSelect={enableSelect}
              updateOptionsSelected={updateOptionsSelected}
            />
            <ShipmentTimeline
              packagesSelected={packagesSelected}
              pickupInfo={pickup}
              handleEditOption={handleEditOption}
            />
          </Col>
          <Col xs={24} md={11} style={{ padding: "16px" }}>
            {driver && <DriverDetails driver={driver} />}
            {price && <PriceDetails price={price} />}
          </Col>
        </Row>
      </div>
      <EditDropoffWithDrawer
        openDrawer={openEditDropoffDrawer}
        onClose={handleCloseEditDropoffDrawer}
        optionSelected={optionSelected}
        handleUpdateDropoffOption={handleUpdateDropoffOption}
      />
    </React.Fragment>
  );
};

export default Testing;
