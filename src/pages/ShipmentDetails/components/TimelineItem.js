import React from "react";
import { Button, Typography, Timeline } from "antd";

import CardContent from "../../../components/ContentCard";

const { Title } = Typography;

const TimelineItem = ({
  option,
  dot = null,
  title,
  children,
  editable = true,
  handleEditOption,
}) => {
  const actions = [
    {
      label: "Editar entrega",
      onClick: () => handleEditOption(option),
    },
    {
      label: "Descargar etiqueta",
      onClick: () => console.log("descargar"),
    },
  ];

  return (
    <React.Fragment>
      <Timeline.Item dot={dot}>
        <CardContent
          actions={
            editable && [
              <div>
                {actions.map(({ label, onClick }) => (
                  <Button
                    key={label}
                    onClick={onClick}
                    style={{ margin: "2.5px 10px" }}
                  >
                    {label}
                  </Button>
                ))}
              </div>,
            ]
          }
        >
          <Title level={4}>{title}</Title>
          {children}
        </CardContent>
      </Timeline.Item>
    </React.Fragment>
  );
};

export default TimelineItem;
