import React, { useState } from "react";
import { Button, Steps } from "antd";
import { useSelector, useDispatch } from "react-redux";

import PickupStep from "./components/PickupStep";
import DropoffStep from "./components/DropoffStep";
import KindOfVehicle from "./components/KindOfVehicle";
import ConfirmShipment from "./components/ConfirmShipment";
import Routes from "./components/Routes";
import CardContent from "../../components/ContentCard";

import { handleMessage } from "../../lib/Helpers";

import CreatePickupWithDrawer from "./components/CreatePickupWithDrawer";
import CreateDropoffWithDrawer from "./components/CreateDropoffWithDrawer";
import EditDropoffWithDrawer from "./components/EditDropoffWithDrawer";
import { updateDropoffOption } from "../../actions";
const { Step } = Steps;

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

const CreateShipment = () => {
  const dispatch = useDispatch();
  const [currentStep, setCurrentStep] = useState(0);
  const [optionSelected, setOptionSelected] = useState(null);
  const [openCreatePickupDrawer, setOpenCreatePickupDrawer] = useState(false);
  const [openCreateDropoffDrawer, setOpenCreateDropoffDrawer] = useState(false);
  const [openEditDropoffDrawer, setOpenEditDropoffDrawer] = useState(false);
  const { selected } = useSelector((state) => state.pickupPoints);
  const { selectedList, options } = useSelector((state) => state.dropoffPoints);
  const vehicle = useSelector((state) => state.kindOfVehicle);

  const handleOpenCreatePickupDrawer = () => setOpenCreatePickupDrawer(true);
  const handleCloseCreatePickupDrawer = () => setOpenCreatePickupDrawer(false);
  const handleOpenCreateDropoffDrawer = () => setOpenCreateDropoffDrawer(true);
  const handleCloseCreateDropoffDrawer = () =>
    setOpenCreateDropoffDrawer(false);

  const handleCloseEditDropoffDrawer = () => setOpenEditDropoffDrawer(false);

  const handleOpenEditDropoffDrawer = (option) => {
    setOptionSelected(option);
    setOpenEditDropoffDrawer(true);
  };

  const handleUpdateDropoffOption = (id, changes) => {
    dispatch(updateDropoffOption(id, changes));
  };

  const steps = [
    {
      title: "Retiro",
      content: <PickupStep onOpenCreate={handleOpenCreatePickupDrawer} />,
    },
    {
      title: "Entrega",
      content: (
        <DropoffStep
          selectedList={selectedList}
          options={options}
          onOpenCreate={handleOpenCreateDropoffDrawer}
          onOpenEdit={handleOpenEditDropoffDrawer}
        />
      ),
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

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
    handleMessage("success", getSuccessMsg(currentStep));
  };
  const prevStep = () => setCurrentStep(currentStep - 1);

  const passStep = (currentStep) => {
    switch (currentStep) {
      case 0: {
        if (selected.id === -1) return true;
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
    <React.Fragment>
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
            <Button size="large" onClick={prevStep}>
              Anterior
            </Button>
          ),
          <React.Fragment>
            {currentStep < steps.length - 1 && (
              <Button
                disabled={passStep(currentStep)}
                size="large"
                type="primary"
                onClick={nextStep}
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
      <CreatePickupWithDrawer
        openDrawer={openCreatePickupDrawer}
        onClose={handleCloseCreatePickupDrawer}
      />
      <CreateDropoffWithDrawer
        openDrawer={openCreateDropoffDrawer}
        onClose={handleCloseCreateDropoffDrawer}
      />
      <EditDropoffWithDrawer
        optionSelected={optionSelected}
        openDrawer={openEditDropoffDrawer}
        onClose={handleCloseEditDropoffDrawer}
        handleUpdateDropoffOption={handleUpdateDropoffOption}
      />
    </React.Fragment>
  );
};

export default CreateShipment;
