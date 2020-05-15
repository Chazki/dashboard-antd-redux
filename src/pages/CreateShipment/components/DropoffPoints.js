import React from "react";
import { Collapse, Empty, Button, Select } from "antd";
import { EditOutlined } from "@ant-design/icons";
import ContentCard from "../../../components/ContentCard";
import { useDispatch, useSelector } from "react-redux";
import {
  handleDrawerDropoffOption,
  selectDropoffOption,
  deselectDropoffOption,
  editDropoffOption,
} from "../../../actions";
import EditDropoffPointDrawer from "./EditDropoffPointDrawer";
import CreateDropoffPointDrawer from "./CreateDropoffPointDrawer";

const { Panel } = Collapse;
const { Option } = Select;

const DropoffPoints = () => {
  const dispatch = useDispatch();
  const { selectedList, options, idOnEdit } = useSelector(
    (state) => state.dropoffPoints
  );

  return (
    <React.Fragment>
      <ContentCard
        title="Información de entrega"
        extra={[
          <Button
            key="createButton"
            style={{ margin: "5px" }}
            onClick={() => dispatch(handleDrawerDropoffOption())}
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
          {options.map(({ name, formattedAddress, id }) => (
            <Option key={id} value={id}>
              {name} - {formattedAddress}
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
                      {option.name}
                      <Button
                        style={{ marginLeft: "10px" }}
                        size="middle"
                        shape="circle"
                        icon={<EditOutlined />}
                        onClick={() => dispatch(editDropoffOption(option.id))}
                      />
                    </span>
                    <span style={{ fontSize: "15px" }}>
                      {option.formattedAddress}
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
      {idOnEdit !== undefined && <EditDropoffPointDrawer />}
      <CreateDropoffPointDrawer />
    </React.Fragment>
  );
};

export default DropoffPoints;
