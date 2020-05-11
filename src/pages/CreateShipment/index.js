import React from "react";
import { Row } from "antd";

import MarkerMap from "./components/MarkerMap";
import Points from "./components/Points";

const CreateShipment = () => {
  return (
    <div style={{ width: "100%" }}>
      <Row>
        <Points />
        <MarkerMap />
      </Row>
    </div>
  );
};

export default CreateShipment;
