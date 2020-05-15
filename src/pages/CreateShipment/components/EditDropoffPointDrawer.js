import React from "react";
import DropoffPointsDrawer from "./DropoffPointsDrawer";
import { useSelector } from "react-redux";

const EditDropoffPointDrawer = () => {
  const { openEditDrawer } = useSelector((state) => state.dropoffPoints);

  return (
    <DropoffPointsDrawer
      edit
      openDrawer={openEditDrawer}
      title="Editar entrega"
    />
  );
};

export default EditDropoffPointDrawer;
