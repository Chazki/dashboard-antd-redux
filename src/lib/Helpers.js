import { message } from "antd";

export const getPointInfo = (location) => {
  return {
    address: location.getPlace().formatted_address,
    location: {
      type: "Point",
      coordinates: [
        location.getPlace().geometry.location.lng(),
        location.getPlace().geometry.location.lat(),
      ],
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

export const handlePlaceChanged = (location, state, setState) => {
  if (location !== null) {
    setState({
      ...state,
      ...getPointInfo(location),
    });
  }
};
