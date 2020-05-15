import React from "react";
import { Row, Col, Button, message } from "antd";

import ContentCard from "../../components/ContentCard";
import Notifications from "./Notifications";
import UserInfo from "./UserInfo";
import UserAvatar from "./UserAvatar";

// import { getUserInfoRequest } from "../../actions";

const success = () => {
  message.success("Configuración guardada correctamente", 1);
};

const notificationsButton = (
  <Button onClick={success}>Guardar configuración</Button>
);

const infoButton = <Button>Editar información</Button>;

const Settings = () => {
  return (
    <div style={{ margin: "-16px" }}>
      <Row>
        <Col xs={24} lg={10} style={{ padding: "16px" }}>
          <ContentCard
            xs={24}
            md={11}
            title="Notificaciones"
            actions={[notificationsButton]}
          >
            <Notifications />
          </ContentCard>
        </Col>
        <Col xs={24} lg={14} style={{ padding: "16px" }}>
          <ContentCard
            xs={24}
            md={13}
            actions={[infoButton]}
            title="Información de usuario"
            extra={<UserAvatar />}
          >
            <UserInfo />
          </ContentCard>
        </Col>
      </Row>
    </div>
  );
};

export default Settings;
