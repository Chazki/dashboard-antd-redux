import React from "react";
import { Card } from "antd";

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
        ...style,
      }}
    >
      {children}
    </Card>
  );
};

export default CardContent;
