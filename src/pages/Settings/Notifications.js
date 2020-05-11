import React, { useState } from "react";
import { Checkbox, Row, Col } from "antd";

const notificationOptions = [
  "Email",
  "Enviar notificaciones",
  "Mensajes de texto",
  "Llamadas",
];

const defaultCheckedList = ["Email", "Llamadas"];

const Notifications = () => {
  const [notificationChecks, setNotificationChecks] = useState({
    checkedList: defaultCheckedList,
    indeterminate: true,
    checkAll: false,
  });

  const handleOnChange = (checkedList) => {
    setNotificationChecks({
      checkedList,
      indeterminate:
        checkedList.length && checkedList.length < notificationOptions.length,
      checkAll: checkedList.length === notificationOptions.length,
    });
  };

  const handleCheckAllChange = (e) => {
    setNotificationChecks({
      checkedList: e.target.checked ? notificationOptions : [],
      indeterminate: false,
      checkAll: e.target.checked,
    });
  };

  const selectAllCheckbox = (
    <React.Fragment>
      <Checkbox
        indeterminate={notificationChecks.indeterminate}
        onChange={handleCheckAllChange}
        checked={notificationChecks.checkAll}
      >
        Seleccionar todo
      </Checkbox>
      <div style={{ height: "10px", width: "100%" }} />
    </React.Fragment>
  );

  const checkboxItems = (
    <Checkbox.Group
      defaultValue={defaultCheckedList}
      value={notificationChecks.checkedList}
      style={{ width: "100%" }}
      onChange={handleOnChange}
    >
      <Row>
        {notificationOptions.map((option) => (
          <Col key={option} span={24}>
            <Checkbox value={option}>{option}</Checkbox>
          </Col>
        ))}
      </Row>
    </Checkbox.Group>
  );

  return (
    <React.Fragment>
      {selectAllCheckbox}
      {checkboxItems}
    </React.Fragment>
  );
};

export default Notifications;
