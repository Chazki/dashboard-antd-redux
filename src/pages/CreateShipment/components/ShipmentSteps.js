import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Steps } from "antd";

import PickupPoint from "./PickupPoint";
import DropoffPoints from "./DropoffPoints";
import KindOfVehicle from "./KindOfVehicle";
import ConfirmShipment from "./ConfirmShipment";
import Routes from "./Routes";
import CardContent from "../../../components/ContentCard";

import { handleMessage } from "../../../lib/Helpers";

const { Step } = Steps;

const steps = [
  {
    title: "Retiro",
    content: <PickupPoint />,
  },
  {
    title: "Entrega",
    content: <DropoffPoints />,
  },
  {
    title: "Vehículo",
    content: <KindOfVehicle />,
  },
  {
    title: "Rutas",
    content: <Routes />,
  },
  {
    title: "Confirmación",
    content: <ConfirmShipment />,
  },
];

const getSuccessMsg = (currentStep) => {
  switch (currentStep) {
    case 0:
      return "La dirección de retiro fue agregada correctamente";
    case 1:
      return "La(s) dirección(es) de retiro fueron agregadas correctamente";
    case 2:
      return "El tipo de vehículo fue agregado correctamente";
    case 3:
      return "La ruta fue agregada correctamente";
    default:
      return "Mensaje no especificado";
  }
};

const ShipmentSteps = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const selectedList = useSelector((state) => state.dropoffPoints.selectedList);
  const currentId = useSelector((state) => state.pickupPoints.selected.id);
  const vehicle = useSelector((state) => state.kindOfVehicle);
  const next = () => {
    setCurrentStep(currentStep + 1);
    handleMessage("success", getSuccessMsg(currentStep));
  };
  const prev = () => setCurrentStep(currentStep - 1);

  const passStep = (currentStep) => {
    switch (currentStep) {
      case 0: {
        if (currentId === -1) return true;
        else return false;
      }
      case 1: {
        if (selectedList.length === 0) return true;
        else return false;
      }
      case 2: {
        if (vehicle === "") return true;
        else return false;
      }
      case 3:
        return false;
      case 4:
        return false;
      default:
        return false;
    }
  };

  return (
    <CardContent
      title={
        <Steps size="small" current={currentStep}>
          {steps.map(({ title }) => (
            <Step key={title} title={title} />
          ))}
        </Steps>
      }
      actions={[
        currentStep > 0 && (
          <Button size="large" onClick={prev}>
            Anterior
          </Button>
        ),
        <React.Fragment>
          {currentStep < steps.length - 1 && (
            <Button
              disabled={passStep(currentStep)}
              size="large"
              type="primary"
              onClick={next}
            >
              Siguiente
            </Button>
          )}
          {currentStep === steps.length - 1 && (
            <Button
              size="large"
              type="primary"
              onClick={() =>
                handleMessage("success", "Envío creado satisfactoriamente")
              }
            >
              Confirmar
            </Button>
          )}
        </React.Fragment>,
      ]}
    >
      {steps[currentStep].content}
    </CardContent>
  );
};

export default ShipmentSteps;
