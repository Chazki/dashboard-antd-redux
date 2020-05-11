import React from "react";
import { Dashboard, Shipments, Settings, CreateShipment } from "./pages";

import {
  HomeOutlined,
  MailOutlined,
  SettingOutlined,
  EditOutlined,
} from "@ant-design/icons";

const routes = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: <HomeOutlined />,
    component: Dashboard,
  },
  {
    label: "Envíos",
    path: "/shipments",
    icon: <MailOutlined />,
    component: Shipments,
  },
  {
    label: "Crear Envío",
    path: "/create-shipment",
    icon: <EditOutlined />,
    component: CreateShipment,
  },
  {
    label: "Configuración",
    path: "/settings",
    icon: <SettingOutlined />,
    component: Settings,
  },
];

export default routes;
