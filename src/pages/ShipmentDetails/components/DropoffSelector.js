import React from "react";
import { Button, Select } from "antd";
import { EditFilled, CheckOutlined } from "@ant-design/icons";

const { Option } = Select;
const DropoffSelector = ({
  selectDisabled,
  packagesSelected,
  allPackages,
  enableSelect,
  updateOptionsSelected,
  handleAddPackage,
  handleDeletePackage,
}) => {
  return (
    <React.Fragment>
      <Select
        disabled={selectDisabled}
        size="middle"
        key="id"
        mode="multiple"
        style={{ width: `calc(100% - ${32 + 26}px)`, marginLeft: 26 }}
        placeholder="Agregar o eliminar entrega"
        defaultValue={packagesSelected.map(({ id }) => id)}
        onSelect={(id) => handleAddPackage(id)}
        onDeselect={(id) => handleDeletePackage(id)}
      >
        {allPackages.map(({ id, productName, dropoffInfo }) => (
          <Option key={id} value={id}>
            {productName} - {dropoffInfo.direction}
          </Option>
        ))}
      </Select>
      <Button
        size="middle"
        type="primary"
        icon={selectDisabled ? <EditFilled /> : <CheckOutlined />}
        onClick={selectDisabled ? enableSelect : updateOptionsSelected}
      />
    </React.Fragment>
  );
};

export default DropoffSelector;
