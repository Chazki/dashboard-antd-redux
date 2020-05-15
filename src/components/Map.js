import React from "react";
import { GoogleMap } from "@react-google-maps/api";

function Map({ width = "100%", height = "400px", children }) {
  return (
    <div style={{ width, height }}>
      <GoogleMap
        onLoad={(map) => {
          const bounds = new window.google.maps.LatLngBounds();
          bounds.extend(
            new window.google.maps.LatLng(
              children[0].props.position.lat,
              children[0].props.position.lng
            )
          );
          children[1].forEach(({ props: { position } }) =>
            bounds.extend(
              new window.google.maps.LatLng(position.lat, position.lng)
            )
          );
          map.fitBounds(bounds);
        }}
        mapContainerStyle={{
          width: "100%",
          height: "100%",
          borderRadius: "5px",
        }}
        zoom={12}
        center={{
          lat: -12.046373,
          lng: -77.042755,
        }}
      >
        {children}
      </GoogleMap>
    </div>
  );
}

export default Map;
