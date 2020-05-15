import { message } from "antd";

export const getPointInfo = (address) => {
  return {
    formattedAddress: address.getPlace().formatted_address,
    coordinates: {
      lat: address.getPlace().geometry.location.lat(),
      lng: address.getPlace().geometry.location.lng(),
    },
  };
};

export const handleMessage = (type, msg) => {
  switch (type) {
    case "success":
      message.success(msg, 0.8);
      break;
    case "error":
      message.error(msg, 0.8);
      break;
    default:
      message.open("Mensaje no especificado", 0.8);
  }
};

export const handlePlaceChanged = (instance, state, setState) => {
  if (instance !== null) {
    setState({
      ...state,
      ...getPointInfo(instance),
    });
  }
};
