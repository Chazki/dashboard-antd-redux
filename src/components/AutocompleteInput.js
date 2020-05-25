import React from "react";
import { Autocomplete, useLoadScript } from "@react-google-maps/api";
import { Input } from "antd";
import { googleMapsApiKey, libraries } from "../googleConfig";

const AutocompleteInput = ({
  style = {},
  placeholder = "",
  size = "large",
  onPlaceChanged,
  onLoad,
  onChange,
  value,
  name,
  disabled = false,
}) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey,
    libraries,
  });

  return isLoaded ? (
    <div
      style={{
        width: "100%",
        position: "relative",
        justifyContent: "center",
      }}
    >
      <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
        <Input
          name={name}
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
  ) : null;
};

export default AutocompleteInput;
