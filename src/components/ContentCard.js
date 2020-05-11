import React from "react";
import { Col, Card } from "antd";

const CardContent = ({
  xs,
  sm,
  md,
  lg,
  title = null,
  children,
  style = {},
  bodyStyle,
  headStyle = { fontSize: "20px" },
  actions = [],
  extra = null,
}) => {
  return (
    <Col xs={xs} sm={sm} md={md} lg={lg} style={{ padding: "0 16px" }}>
      <Card
        actions={actions}
        bodyStyle={bodyStyle}
        title={title}
        headStyle={headStyle}
        extra={extra}
        style={{
          width: "100%",
          borderRadius: "4px",
          borderWidth: 0,
          boxShadow:
            "0 0 0 1px rgba(63,63,68,0.05), 0 1px 3px 0 rgba(63,63,68,0.15)",
          marginBottom: "20px",
          ...style,
        }}
      >
        {children}
      </Card>
    </Col>
  );
};

export default CardContent;
