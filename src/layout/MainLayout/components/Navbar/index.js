import React from "react";
import { Layout, PageHeader } from "antd";

import SidebarButton from "./components/SidebarButton";

const { Header } = Layout;

const Navbar = ({ label, style = {} }) => {
  return (
    <React.Fragment>
      <Header style={style}>
        <PageHeader
          backIcon={<SidebarButton />}
          onBack={() => null}
          title={<div style={{ color: "#272C33" }}>{label}</div>}
        />
      </Header>
    </React.Fragment>
  );
};

export default Navbar;
