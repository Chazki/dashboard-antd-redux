import React from "react";
import Map from "../../../components/Map";
import { useSelector } from "react-redux";
import decodePolyline from "decode-google-map-polyline";

const MapWithRoutes = ({ pickupCoordinates, dropoffCoordinatesList }) => {
  const data = useSelector((state) => state.getOneShipment.data);

  return (
    data.pickupInfo && (
      <React.Fragment>
        <Map
          showInfoBox
          pickupPoint={pickupCoordinates}
          dropoffPoints={dropoffCoordinatesList}
          polyline={decodePolyline(data.travelPolyline)}
        />
      </React.Fragment>
    )
  );
};

export default MapWithRoutes;
