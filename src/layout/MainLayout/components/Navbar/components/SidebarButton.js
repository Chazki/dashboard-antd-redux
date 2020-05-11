import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  desktopSidebarState,
  mobileSidebarState,
} from "../../../../../actions";

import { Button, Grid } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  MenuOutlined,
} from "@ant-design/icons";

const { useBreakpoint } = Grid;

const SidebarButton = () => {
  const dispatch = useDispatch();
  const { md } = useBreakpoint();
  const { desktop: collapsed } = useSelector((state) => state.sidebarStates);

  return (
    <Button
      onClick={() =>
        dispatch(md ? desktopSidebarState() : mobileSidebarState())
      }
      type="default"
      shape="circle"
      icon={
        md ? (
          collapsed ? (
            <MenuUnfoldOutlined />
          ) : (
            <MenuFoldOutlined />
          )
        ) : (
          <MenuOutlined />
        )
      }
      size="large"
    />
  );
};

export default SidebarButton;
