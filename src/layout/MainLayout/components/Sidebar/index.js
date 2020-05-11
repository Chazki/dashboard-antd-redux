import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Layout, Drawer } from "antd";

import SidebarTitle from "./components/SidebarTitle";
import SidebarMenu from "./components/SidebarMenu";

import { mobileSidebarState } from "../../../../actions";

const { Sider } = Layout;

const Sidebar = ({
  md,
  width,
  collapsedWidth,
  themeMobile = "light",
  placementMobile = "right",
}) => {
  const dispatch = useDispatch();
  const { desktop, mobile } = useSelector((state) => state.sidebarStates);

  const desktopSidebar = (
    <Sider
      style={{
        overflowX: "hidden",
        height: "100vh",
        position: "fixed",
        zIndex: 150,
      }}
      width={width}
      collapsedWidth={collapsedWidth}
      theme="light"
      trigger={null}
      collapsible
      collapsed={desktop}
    >
      <SidebarTitle isDesktop={md} desktopCollapsed={desktop} />
      <SidebarMenu isDesktop={md} type="primary" />
    </Sider>
  );

  const mobileSidebar = (
    <Drawer
      width={width}
      bodyStyle={{ padding: 0 }}
      title={<SidebarTitle />}
      placement={placementMobile}
      closable={false}
      onClose={() => dispatch(mobileSidebarState())}
      visible={mobile}
    >
      <SidebarMenu theme={themeMobile} />
    </Drawer>
  );

  return <React.Fragment>{md ? desktopSidebar : mobileSidebar}</React.Fragment>;
};

export default Sidebar;
