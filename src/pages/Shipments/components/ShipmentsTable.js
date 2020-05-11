import React, { useEffect, useState } from "react";
import { Col, Table, Form, Select, message } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { shipmentsRequest } from "../../../actions";

const columns = [
  {
    title: "id",
    dataIndex: "id",
  },
  {
    title: "Cliente",
    dataIndex: "customer",
  },
  {
    title: "Teléfono del cliente",
    dataIndex: "customerPhone",
  },
  {
    title: "Conductor",
    dataIndex: "driver",
  },
  {
    title: "Empresa",
    dataIndex: "enterprise",
  },
  {
    title: "Estado actual",
    dataIndex: "currentShippingState",
  },
];

const shipmentStates = [
  {
    label: "Todos",
    value: "all",
  },
  {
    label: "En curso",
    value: "running",
  },
  {
    label: "Programados",
    value: "scheduled",
  },
  {
    label: "Completados",
    value: "completed",
  },
  {
    label: "Cancelados",
    value: "cancelled",
  },
];

const getData = (data) => {
  if (data.length === 0) return [];
  return data.map(({ customer, driver, shipment }) => {
    return {
      id: shipment.id,
      customer: `${customer.firstName} ${customer.lastName}`,
      customerPhone: customer.phone,
      driver: `${driver.firstName} ${driver.lastName}`,
      enterprise: shipment.enterpriseInfo.name,
      currentShippingState:
        shipment.actionHistory[shipment.actionHistory.length - 1].action,
    };
  });
};

const popupMessage = (status, textMsg) => {
  if (status === "success") message.success(textMsg, 1);
  else if (status === "error") message.error(textMsg, 1);
};

const ShipmentsTable = () => {
  const apiKey = localStorage.getItem("apiKey");
  const roleKey = localStorage.getItem("roleKey");
  const { loading, data, filter } = useSelector((state) => state.shipments);
  const [currentFilter, setCurrentFilter] = useState(filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(shipmentsRequest(currentFilter, apiKey, roleKey, popupMessage));
  }, [currentFilter, apiKey, roleKey, dispatch]);

  return (
    <Col xs={24}>
      <Form>
        <Form.Item>
          <Select
            loading={loading}
            options={shipmentStates}
            defaultValue={currentFilter}
            onChange={(value) => setCurrentFilter(value)}
          />
        </Form.Item>
      </Form>
      <Table
        scroll={{ x: "calc(100vw - 305px)" }}
        rowKey="id"
        columns={columns}
        dataSource={getData(data)}
        bordered
        loading={loading}
        pagination={{ position: ["bottomCenter", "none"] }}
      />
    </Col>
  );
};

export default ShipmentsTable;
