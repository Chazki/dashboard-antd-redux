import React from "react";
import { useSelector } from "react-redux";

import CardContent from "../../../components/ContentCard";
import Map from "../../../components/Map";

const Routes = () => {
  const {
    pickupInfo: {
      location: { coordinates: pickupCoordinates },
    },
  } = useSelector((state) => state.pickupPoints.selected);
  const selectedDropoffPoints = useSelector(
    (state) => state.dropoffPoints.selectedList
  );

  return (
    <CardContent>
      <Map
        width="100%"
        height="400px"
        pickupPoint={{ lat: pickupCoordinates[1], lng: pickupCoordinates[0] }}
        dropoffPoints={selectedDropoffPoints.map(
          ({
            dropoffInfo: {
              location: { coordinates },
            },
          }) => ({ lat: coordinates[1], lng: coordinates[0] })
        )}
      />
    </CardContent>
  );
};

export default Routes;
