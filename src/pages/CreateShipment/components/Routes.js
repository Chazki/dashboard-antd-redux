import React from "react";
import { useSelector } from "react-redux";
import { Marker } from "@react-google-maps/api";

import CardContent from "../../../components/ContentCard";
import Map from "../../../components/Map";

const pickupIcon =
  "http://s3-sa-east-1.amazonaws.com/todovadocs/docs/pin_from.png";
const dropoffIcon =
  "http://s3-sa-east-1.amazonaws.com/todovadocs/docs/pin_dropoff.png";

const Routes = () => {
  const selectedPickupPoint = useSelector(
    (state) => state.pickupPoints.selected
  );
  const selectedDropoffPoints = useSelector(
    (state) => state.dropoffPoints.selectedList
  );

  return (
    <CardContent>
      <Map width="100%" height="400px">
        <Marker icon={pickupIcon} position={selectedPickupPoint.coordinates} />
        {selectedDropoffPoints.map(({ name, coordinates }) => (
          <Marker key={name} icon={dropoffIcon} position={coordinates} />
        ))}
      </Map>
    </CardContent>
  );
};

export default Routes;
