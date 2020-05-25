import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Select } from "antd";

import { selectPickupOption } from "../../../actions";
import ContentCard from "../../../components/ContentCard";

const { Option } = Select;

const PickupStep = ({ onOpenCreate }) => {
  const dispatch = useDispatch();
  const {
    selected: { id },
    options,
  } = useSelector((state) => state.pickupPoints);

  return (
    <React.Fragment>
      <ContentCard
        title="Información de retiro"
        extra={
          <Button
            size="small"
            type="dashed"
            shape="circle"
            icon={<PlusOutlined />}
            onClick={onOpenCreate}
          />
        }
      >
        <Select
          onSelect={(id) => dispatch(selectPickupOption(id))}
          size="large"
          defaultValue={id}
          style={{ width: "100%" }}
        >
          <Option value={-1}>Ninguna</Option>
          {options.map((point) => (
            <Option key={point.name} value={point.id}>
              {point.name} - {point.pickupInfo.direction}
            </Option>
          ))}
        </Select>
      </ContentCard>
    </React.Fragment>
  );
};

export default PickupStep;
