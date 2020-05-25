import React from "react";
import { Timeline } from "antd";
import { EnvironmentFilled } from "@ant-design/icons";
import TimelineItem from "../components/TimelineItem";

const DotWithIndex = ({ index }) => {
  return (
    <div
      style={{
        width: "22px",
        height: "22px",
        backgroundColor: "#272C33",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#f4f6f8",
        fontWeight: "bold",
      }}
    >
      {index + 1}
    </div>
  );
};

const ShipmentTimeline = ({
  pickupInfo,
  packagesSelected,
  handleEditOption,
}) => {
  return (
    pickupInfo && (
      <Timeline style={{ marginTop: 25, paddingRight: 32 }}>
        <TimelineItem
          editable={false}
          title="Retiro"
          dot={
            <EnvironmentFilled
              style={{
                fontSize: "20px",
                color: "#EC274B",
                backgroundColor: "#f4f6f8",
              }}
            />
          }
        >
          {pickupInfo.direction}
        </TimelineItem>
        {packagesSelected.map((option, index) => (
          <TimelineItem
            option={option}
            id={option.id}
            key={option.id}
            title={option.invoiceNumber}
            productName={option.productName}
            dropoffInfo={option.dropoffInfo}
            dot={<DotWithIndex index={index} />}
            handleEditOption={handleEditOption}
          >
            {option.dropoffInfo.direction}
          </TimelineItem>
        ))}
      </Timeline>
    )
  );
};

export default ShipmentTimeline;
