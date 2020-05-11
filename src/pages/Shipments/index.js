import React from "react";
import { Row } from "antd";

import ShipmentsTitle from "./components/ShipmentsTitle";
import ShipmentsTable from "./components/ShipmentsTable";

const Shipments = () => {
  return (
    <Row style={{ padding: "0 16px" }}>
      <ShipmentsTitle />
      <ShipmentsTable />
    </Row>
  );
};

export default Shipments;
