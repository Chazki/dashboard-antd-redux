import React from "react";

const siderHeader = {
  color: "#FFF",
  fontSize: 20,
  fontWeight: "bold",
  padding: 10,
  textAlign: "center",
};

const SidebarTitle = ({ isDesktop = false, desktopCollapsed }) => {
  return (
    <div
      style={desktopCollapsed ? { ...siderHeader, fontSize: 10 } : siderHeader}
    >
      FakeApp
    </div>
  );
};

export default SidebarTitle;
