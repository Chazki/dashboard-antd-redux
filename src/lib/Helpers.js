import { message } from "antd";

export const handleMessage = (type, msg) => message[type](msg);

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

export const handlePlaceChanged = (location, state, setState) => {
  if (location !== null) {
    setState({
      ...state,
      ...getPointInfo(location),
    });
  }
};
