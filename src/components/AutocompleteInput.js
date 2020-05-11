import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { Input, Button } from "antd";

import { PlusOutlined } from "@ant-design/icons";

const AutocompleteInput = ({
  placeholder = "",
  size = "small",
  onPlaceChanged,
  onLoad,
  onChange,
  onClick,
  value,
  loading = false,
}) => (
  <div
    style={{
      width: "100%",
      position: "relative",
      justifyContent: "center",
    }}
  >
    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
      <Input
        style={{ width: "calc(100% - 38px)" }}
        size={size}
        onChange={onChange}
        value={value}
        type="text"
        placeholder={placeholder}
      />
    </Autocomplete>
    <Button
      loading={loading}
      onClick={onClick}
      style={{ width: "38px", position: "absolute", right: 0, top: 0 }}
      size={size}
      type="primary"
      icon={<PlusOutlined />}
    />
  </div>
);

export default AutocompleteInput;
