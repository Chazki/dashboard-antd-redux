import React from "react";
import { Row, Calendar, Button } from "antd";

import ContentCard from "../../components/ContentCard";

const calendarButton = <Button>Crear evento</Button>;
const Dashboard = () => {
  return (
    <Row>
      <ContentCard title="Calendario" actions={[calendarButton]}>
        <Calendar fullscreen={false} />
      </ContentCard>
    </Row>
  );
};
export default Dashboard;
