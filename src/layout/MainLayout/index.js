import React from "react";
import { useSelector } from "react-redux";
import { Layout, Grid } from "antd";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

const { Content } = Layout;
const { useBreakpoint } = Grid;

const headerHeight = 80;
const sidebarWidth = 240;
const sidebarCollapsedWidth = 80;

const headerStyles = {
  backgroundColor: "#F2F2F2",
  position: "fixed",
  width: "100%",
  padding: 0,
  zIndex: 100,
  height: headerHeight,
  transition: ".2s",
  boxShadow: "0px 3px 5px -2px rgba(171,171,171,1)",
};

const contentStyles = {
  position: "relative",
  zIndex: 50,
  backgroundColor: "#F4F6F8",
  height: "100%",
  padding: `${headerHeight + 32}px 16px 32px 16px`,
  overflowY: "hidden",
  maxHeight: "100%",
  transition: ".2s",
};

const MainLayout = ({ children, label }) => {
  const open = useSelector((state) => state.sidebarStates.desktop);
  const { md } = useBreakpoint();

  return (
    <Layout>
      <Sidebar
        md={md}
        width={sidebarWidth}
        collapsedWidth={sidebarCollapsedWidth}
      />
      {/* desktop layout */}
      <Layout
        style={
          md
            ? open
              ? { marginLeft: sidebarCollapsedWidth, transition: ".2s" }
              : { marginLeft: sidebarWidth, transition: ".2s" }
            : { display: "none" }
        }
      >
        <Navbar label={label} style={headerStyles} />
        <Content style={contentStyles}>{children}</Content>
      </Layout>
      {/* mobile layout */}
      <Layout hidden={md} style={{ backgroundColor: "#F4F6F8" }}>
        <Navbar label={label} style={headerStyles} />
        <Content style={contentStyles}>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
