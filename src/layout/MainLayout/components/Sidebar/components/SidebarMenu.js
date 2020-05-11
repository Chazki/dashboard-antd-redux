import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Menu } from "antd";

import LogoutButton from "./LogoutButton";
import privateRoutes from "../../../../../routes";

const SidebarMenu = ({ theme, isDesktop = false, type = "default" }) => {
  const history = useHistory();
  const location = useLocation();

  return (
    <React.Fragment>
      <Menu
        mode="inline"
        theme={theme}
        selectedKeys={[location.pathname]}
        onClick={({ key: path }) => history.push(path)}
      >
        {privateRoutes.map(({ label, path, icon }) => (
          <Menu.Item key={path} title={label}>
            {icon}
            <span>{label}</span>
          </Menu.Item>
        ))}
        <LogoutButton type={type} isDesktop={isDesktop} />
      </Menu>
    </React.Fragment>
  );
};

export default SidebarMenu;
