import React from "react";
import {
  GoogleMap,
  Marker,
  Polyline,
  InfoBox,
  useLoadScript,
} from "@react-google-maps/api";
import { googleMapsApiKey, libraries } from "../googleConfig";

const pickupIcon =
  "http://s3-sa-east-1.amazonaws.com/todovadocs/docs/pin_from.png";
const dropoffIcon =
  "http://s3-sa-east-1.amazonaws.com/todovadocs/docs/pin_dropoff.png";

const options = {
  strokeColor: "#800080",
  strokeOpacity: 0.8,
  strokeWeight: 3,
  fillColor: "#800080",
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 30000,
  zIndex: 1,
};

const Map = ({
  width = "100%",
  height = "400px",
  style = {},
  children,
  pickupPoint = null,
  dropoffPoints = null,
  polyline = null,
  showInfoBox = false,
  hasMarkers = false,
}) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey,
    libraries,
  });

  const getCenter = () => {
    const bounds = new window.google.maps.LatLngBounds();
    if (pickupPoint) bounds.extend(new window.google.maps.LatLng(pickupPoint));
    if (dropoffPoints) {
      dropoffPoints.forEach((coordinates) => {
        bounds.extend(new window.google.maps.LatLng(coordinates));
      });
    }

    return bounds.getCenter();
  };

  return isLoaded ? (
    <div style={{ width, height, ...style }}>
      <GoogleMap
        center={getCenter()}
        mapContainerStyle={{
          width: "100%",
          height: "100%",
          borderRadius: "5px",
        }}
        zoom={12}
      >
        {pickupPoint && <Marker icon={pickupIcon} position={pickupPoint} />}
        {dropoffPoints &&
          dropoffPoints.map((coordinates, index) => (
            <Marker key={index} icon={dropoffIcon} position={coordinates} />
          ))}
        {showInfoBox &&
          dropoffPoints &&
          dropoffPoints.map((coordinates, index) => (
            <InfoBox
              key={index}
              options={{
                closeBoxURL: "",
                alignBottom: true,
                pixelOffset: new window.google.maps.Size(5, -20),
              }}
              position={coordinates}
            >
              <div
                style={{
                  backgroundColor: "#272C33",
                  opacity: 1,
                  padding: 5,
                  color: "#FFF",
                  borderRadius: 5,
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                {index + 1}
              </div>
            </InfoBox>
          ))}
        {polyline && <Polyline path={polyline} options={options} />}

        {children}
      </GoogleMap>
    </div>
  ) : null;
};

export default Map;
