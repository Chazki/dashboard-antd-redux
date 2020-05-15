import React from "react";
import { Row, Calendar, Button, Col } from "antd";

import ContentCard from "../../components/ContentCard";

const calendarButton = <Button>Crear evento</Button>;
const Dashboard = () => {
  return (
    <Row>
      <Col>
        <ContentCard title="Calendario" actions={[calendarButton]}>
          <Calendar fullscreen={false} />
        </ContentCard>
      </Col>
    </Row>
  );
};
export default Dashboard;
