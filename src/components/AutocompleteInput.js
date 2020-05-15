import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { Input } from "antd";

const AutocompleteInput = ({
  style = {},
  placeholder = "",
  size = "large",
  onPlaceChanged,
  onLoad,
  onChange,
  value,
  disabled = false,
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
        style={style}
        disabled={disabled}
        size={size}
        onChange={onChange}
        value={value}
        type="text"
        placeholder={placeholder}
      />
    </Autocomplete>
  </div>
);

export default AutocompleteInput;
