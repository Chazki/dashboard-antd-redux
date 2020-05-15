import React from "react";
import DropoffPointsDrawer from "./DropoffPointsDrawer";
import { useSelector } from "react-redux";

const CreateDropoffPointDrawer = () => {
  const openDrawer = useSelector(
    (state) => state.dropoffPoints.openCreateDrawer
  );

  return (
    <DropoffPointsDrawer
      openDrawer={openDrawer}
      edit={false}
      title="Crear nueva entrega"
    />
  );
};

export default CreateDropoffPointDrawer;
