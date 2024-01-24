import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React from "react";
import Home from "./pages/home";

export interface DataLeftMenuItems {
  label: React.ReactNode;
  key: React.Key;
  icon?: React.ReactNode;
  children?: DataLeftMenuItems[];
  path: string;
  component?: any;
  roles?: [];
}

export const LeftMenuItems: DataLeftMenuItems[] = [
  {
    key: "1",
    label: "home",
    path: "home1",
    icon: <PieChartOutlined />,
    component: <Home />,
    roles: [],
  },
  {
    key: "2",
    label: "page1",
    path: "page1",
    icon: <DesktopOutlined />,
    roles: [],
    children: [
      {
        key: "21",
        label: "page2",
        path: "page2",
        icon: <DesktopOutlined />,
        component: "page2",
        roles: [],
      },
    ],
  },
  {
    key: "3",
    label: "about us",
    path: "about-us",
    icon: <TeamOutlined />,
    component: "about us",
    roles: [],
  },
  {
    key: "4",
    label: "home",
    path: "home1",
    icon: <PieChartOutlined />,
    component: <Home />,
    roles: [],
  },
  {
    key: "5",
    label: "page1",
    path: "page1",
    icon: <DesktopOutlined />,
    roles: [],
    children: [
      {
        key: "51",
        label: "page2",
        path: "page2",
        icon: <DesktopOutlined />,
        component: "page2",
        roles: [],
      },
    ],
  },
  {
    key: "6",
    label: "about us",
    path: "about-us",
    icon: <TeamOutlined />,
    component: "about us",
    roles: [],
  },
  {
    key: "7",
    label: "home",
    path: "home1",
    icon: <PieChartOutlined />,
    component: <Home />,
    roles: [],
  },
  {
    key: "8",
    label: "page1",
    path: "page1",
    icon: <DesktopOutlined />,
    roles: [],
    children: [
      {
        key: "81",
        label: "page2",
        path: "page2",
        icon: <DesktopOutlined />,
        component: "page2",
        roles: [],
      },
    ],
  },
  {
    key: "9",
    label: "about us",
    path: "about-us",
    icon: <TeamOutlined />,
    component: "about us",
    roles: [],
  },
];
