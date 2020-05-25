import React from "react";
import { Collapse, Empty, Button, Select } from "antd";
import { EditOutlined } from "@ant-design/icons";
import ContentCard from "../../../components/ContentCard";
import { useDispatch } from "react-redux";
import { selectDropoffOption, deselectDropoffOption } from "../../../actions";

const { Panel } = Collapse;
const { Option } = Select;

const DropoffStep = ({ onOpenCreate, onOpenEdit, selectedList, options }) => {
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <ContentCard
        title="Información de entrega"
        extra={[
          <Button
            key="createButton"
            style={{ margin: "5px" }}
            onClick={onOpenCreate}
          >
            Crear nueva entrega
          </Button>,
        ]}
      >
        <Select
          showSearch
          filterOption={(input, option) =>
            option.children[0].toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          size="large"
          mode="multiple"
          style={{ width: "100%" }}
          placeholder="Seleccione alguna entrega registrada"
          defaultValue={selectedList.map(({ id }) => id)}
          onSelect={(id) => {
            dispatch(selectDropoffOption(id));
          }}
          onDeselect={(id) => {
            dispatch(deselectDropoffOption(id));
          }}
        >
          {options.map(({ id, productName, dropoffInfo }) => (
            <Option key={id} value={id}>
              {productName} - {dropoffInfo.direction}
            </Option>
          ))}
        </Select>
        {selectedList.length === 0 ? (
          <Empty
            style={{ marginTop: "20px" }}
            description={
              <span style={{ fontWeight: "bold" }}>
                No has agregado entregas
              </span>
            }
          />
        ) : (
          <Collapse
            style={{ marginTop: "20px" }}
            expandIconPosition="right"
            accordion
          >
            {selectedList.map((option) => (
              <Panel
                key={option.id}
                header={
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span
                      style={{
                        fontWeight: "bold",
                        fontSize: "18px",
                      }}
                    >
                      {option.productName}
                      <Button
                        style={{ marginLeft: "10px" }}
                        size="middle"
                        shape="circle"
                        icon={<EditOutlined />}
                        onClick={() => onOpenEdit(option)}
                      />
                    </span>
                    <span style={{ fontSize: "15px" }}>
                      {option.dropoffInfo.direction}
                    </span>
                  </div>
                }
              >
                some info
              </Panel>
            ))}
          </Collapse>
        )}
      </ContentCard>
    </React.Fragment>
  );
};

export default DropoffStep;
