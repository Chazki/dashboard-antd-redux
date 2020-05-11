import React from "react";
import { useSelector } from "react-redux";
import { Marker } from "@react-google-maps/api";
import { Col } from "antd";

import ContentCard from "../../../components/ContentCard";
import Map from "../../../components/Map";

const pickupIcon =
  "http://s3-sa-east-1.amazonaws.com/todovadocs/docs/pin_from.png";
const dropoffIcon =
  "http://s3-sa-east-1.amazonaws.com/todovadocs/docs/pin_dropoff.png";

const MarkerMap = () => {
  const { pickupPoints, dropoffPoints } = useSelector((state) => state);

  return (
    <Col lg={14} xs={24}>
      <ContentCard bodyStyle={{ padding: 0 }}>
        <Map width="100%">
          {pickupPoints.map(({ formattedAddress, coordinates }) => (
            <Marker
              key={formattedAddress}
              icon={pickupIcon}
              position={coordinates}
            />
          ))}
          {dropoffPoints.map(({ formattedAddress, coordinates }) => (
            <Marker
              key={formattedAddress}
              icon={dropoffIcon}
              position={coordinates}
            />
          ))}
        </Map>
      </ContentCard>
    </Col>
  );
};

export default MarkerMap;
