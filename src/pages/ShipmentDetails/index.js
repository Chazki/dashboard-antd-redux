import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getOneShipmentRequest } from "../../actions";

import Loader from "../../components/Loader";
import Details from "./components/Details";

const ShipmentDetails = () => {
  const dispatch = useDispatch();
  const apiKey = localStorage.getItem("apiKey");
  const roleKey = localStorage.getItem("roleKey");
  const { shipmentId } = useParams();
  const { loading } = useSelector((state) => state.getOneShipment);

  useEffect(() => {
    dispatch(getOneShipmentRequest(shipmentId, apiKey, roleKey));
  }, [dispatch, shipmentId, apiKey, roleKey]);

  return loading ? (
    <div style={{ height: "calc(100vh - 144px)" }}>
      <Loader />
    </div>
  ) : (
    <Details />
  );
};

export default ShipmentDetails;
